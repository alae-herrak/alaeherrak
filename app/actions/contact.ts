"use server";

import { Resend } from "resend";
import { headers } from "next/headers";

export interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface ContactActionState {
  success: boolean;
  error?: string;
  fieldErrors?: FieldErrors;
  timestamp?: number;
}

// In-memory sliding window rate limiter
// IP / Client ID -> list of request timestamps in milliseconds
interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitStore = new Map<string, RateLimitRecord>();

// Clean up stale entries every 10 minutes
setInterval(() => {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  for (const [key, record] of rateLimitStore.entries()) {
    record.timestamps = record.timestamps.filter((t) => now - t < windowMs);
    if (record.timestamps.length === 0) {
      rateLimitStore.delete(key);
    }
  }
}, 10 * 60 * 1000);

function checkRateLimit(identifier: string, limit = 4, windowSeconds = 600): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const windowMs = windowSeconds * 1000;

  let record = rateLimitStore.get(identifier);
  if (!record) {
    record = { timestamps: [] };
    rateLimitStore.set(identifier, record);
  }

  // Filter timestamps within current window
  record.timestamps = record.timestamps.filter((t) => now - t < windowMs);

  if (record.timestamps.length >= limit) {
    const oldest = record.timestamps[0];
    const retryAfter = Math.ceil((oldest + windowMs - now) / 1000);
    return { allowed: false, retryAfter };
  }

  record.timestamps.push(now);
  return { allowed: true };
}

export async function sendContactEmail(
  prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  // 1. IP & Rate Limiting Check
  let clientIp = "unknown-client";
  try {
    const headerList = await headers();
    const forwardedFor = headerList.get("x-forwarded-for");
    const realIp = headerList.get("x-real-ip");
    clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : realIp || "127.0.0.1";
  } catch {
    clientIp = "127.0.0.1";
  }

  // Honeypot check for bots (hidden field that humans won't touch)
  const honeypot = formData.get("company_website")?.toString().trim();
  if (honeypot) {
    // Silently succeed for bots
    return {
      success: true,
      timestamp: Date.now(),
    };
  }

  const { allowed, retryAfter } = checkRateLimit(clientIp, 4, 600); // 4 messages per 10 minutes
  if (!allowed) {
    return {
      success: false,
      error: `Too many submissions. Please wait ${Math.max(1, retryAfter || 60)} seconds before trying again.`,
      timestamp: Date.now(),
    };
  }

  // 2. Field Extraction & Trimming
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  // 3. Granular Validation
  const fieldErrors: FieldErrors = {};

  if (!name) {
    fieldErrors.name = "Name is required.";
  } else if (name.length < 2) {
    fieldErrors.name = "Name must be at least 2 characters.";
  } else if (name.length > 80) {
    fieldErrors.name = "Name cannot exceed 80 characters.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    fieldErrors.email = "Email address is required.";
  } else if (!emailRegex.test(email)) {
    fieldErrors.email = "Please enter a valid email address (e.g. name@domain.com).";
  } else if (email.length > 120) {
    fieldErrors.email = "Email address cannot exceed 120 characters.";
  }

  if (!message) {
    fieldErrors.message = "Message is required.";
  } else if (message.length < 10) {
    fieldErrors.message = "Message must be at least 10 characters.";
  } else if (message.length > 3000) {
    fieldErrors.message = "Message cannot exceed 3,000 characters.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      success: false,
      error: "Please correct the highlighted fields before sending.",
      fieldErrors,
      timestamp: Date.now(),
    };
  }

  // 4. Guard against missing or placeholder API key
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey.trim() === "" || apiKey === "re_your_api_key_here") {
    console.error("Resend API key is missing or not configured.");
    return {
      success: false,
      error:
        "The message service is temporarily unconfigured. Please email directly at alaeherrak@gmail.com.",
      timestamp: Date.now(),
    };
  }

  const recipient =
    process.env.CONTACT_EMAIL_RECIPIENT || "alaeherrak@gmail.com";

  try {
    const resend = new Resend(apiKey);
    const timestampStr = new Date().toLocaleString("en-US", {
      timeZone: "UTC",
      dateStyle: "full",
      timeStyle: "long",
    });

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: recipient,
      replyTo: email,
      subject: `Portfolio Inquiry from ${name}`,
      text: `New Portfolio Inquiry Received\n\nFrom: ${name} (${email})\nTimestamp (UTC): ${timestampStr}\n\nMessage:\n${message}\n`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111; line-height: 1.6;">
          <div style="border-bottom: 2px solid #eaeaea; padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="margin: 0; font-size: 20px; font-weight: 700; color: #000;">Portfolio Contact Message</h2>
            <p style="margin: 4px 0 0 0; color: #666; font-size: 13px;">Received via alaeherrak.com on ${timestampStr} UTC</p>
          </div>
          
          <div style="background-color: #f9f9f9; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
            <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Sender Name:</strong> ${name}</p>
            <p style="margin: 0; font-size: 14px;"><strong>Email Address:</strong> <a href="mailto:${email}" style="color: #0066cc;">${email}</a></p>
          </div>

          <div style="margin-bottom: 24px;">
            <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #888; margin: 0 0 8px 0;">Message</h3>
            <div style="white-space: pre-wrap; background: #ffffff; border: 1px solid #e5e5e5; border-radius: 8px; padding: 16px; font-size: 15px; color: #222;">${message.replace(
              /</g,
              "&lt;"
            ).replace(/>/g, "&gt;")}</div>
          </div>

          <div style="border-top: 1px solid #eaeaea; padding-top: 16px; font-size: 12px; color: #999;">
            This email was sent from your portfolio website contact form. You can reply directly to this email to respond to ${name}.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return {
        success: false,
        error: error.message || "Failed to send message via Resend.",
        timestamp: Date.now(),
      };
    }

    return {
      success: true,
      timestamp: Date.now(),
    };
  } catch (err: unknown) {
    console.error("Unexpected error in contact form handler:", err);
    return {
      success: false,
      error:
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while sending your message.",
      timestamp: Date.now(),
    };
  }
}
