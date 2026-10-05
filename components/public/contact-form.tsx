"use client";

import React, { useActionState, useEffect, useRef, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  sendContactEmail,
  ContactActionState,
  FieldErrors,
} from "@/app/actions/contact";
import { toast } from "sonner";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const initialState: ContactActionState = {
  success: false,
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);

  // Client-side form values & validation state
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [clientErrors, setClientErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Merge client-side validation errors with server-returned field errors
  const activeErrors: FieldErrors = {
    name: clientErrors.name || state.fieldErrors?.name,
    email: clientErrors.email || state.fieldErrors?.email,
    message: clientErrors.message || state.fieldErrors?.message,
  };

  const validateField = (name: string, value: string): string | undefined => {
    const trimmed = value.trim();
    if (name === "name") {
      if (!trimmed) return "Please enter your name.";
      if (trimmed.length < 2) return "Name must be at least 2 characters.";
      if (trimmed.length > 80) return "Name cannot exceed 80 characters.";
    }
    if (name === "email") {
      if (!trimmed) return "Please enter your email address.";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) {
        return "Please enter a valid email address (e.g. name@domain.com).";
      }
      if (trimmed.length > 120) return "Email cannot exceed 120 characters.";
    }
    if (name === "message") {
      if (!trimmed) return "Please enter a message.";
      if (trimmed.length < 10) return "Message must be at least 10 characters.";
      if (trimmed.length > 3000) return "Message cannot exceed 3,000 characters.";
    }
    return undefined;
  };

  const handleBlur = (field: "name" | "email" | "message") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, values[field]);
    setClientErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (
    field: "name" | "email" | "message",
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newVal = e.target.value;
    setValues((prev) => ({ ...prev, [field]: newVal }));

    if (touched[field]) {
      const error = validateField(field, newVal);
      setClientErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Perform client validation across all fields before dispatching action
    const nameErr = validateField("name", values.name);
    const emailErr = validateField("email", values.email);
    const msgErr = validateField("message", values.message);

    const newErrors = {
      name: nameErr,
      email: emailErr,
      message: msgErr,
    };

    setTouched({ name: true, email: true, message: true });
    setClientErrors(newErrors);

    if (nameErr || emailErr || msgErr) {
      e.preventDefault();
      toast.error("Please fill out all fields correctly.");
      return;
    }
  };

  useEffect(() => {
    if (state.success && state.timestamp) {
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      formRef.current?.reset();
      setValues({ name: "", email: "", message: "" });
      setTouched({});
      setClientErrors({});
    } else if (state.error && state.timestamp) {
      toast.error("Failed to send message", {
        description: state.error,
      });
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={handleSubmit}
      noValidate
      className="portfolio-card w-full max-w-xl space-y-5 rounded-3xl p-6 sm:p-8 text-left transition-all"
    >
      {/* Honeypot field to trap spam bots silently */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Company Website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name Field */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-center">
          <Label
            htmlFor="name"
            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Your Name
          </Label>
          {activeErrors.name && (
            <span className="text-[11px] font-medium text-destructive flex items-center gap-1">
              <AlertCircle className="size-3" />
              {activeErrors.name}
            </span>
          )}
        </div>
        <Input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={(e) => handleChange("name", e)}
          onBlur={() => handleBlur("name")}
          placeholder="e.g. Alex Morgan"
          disabled={isPending}
          aria-invalid={!!activeErrors.name}
          className={cn(
            "h-11 rounded-xl bg-background/50 text-sm transition-all focus-visible:ring-primary/30",
            activeErrors.name &&
              "border-destructive/60 focus-visible:ring-destructive/30"
          )}
        />
      </div>

      {/* Email Field */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-center">
          <Label
            htmlFor="email"
            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Email Address
          </Label>
          {activeErrors.email && (
            <span className="text-[11px] font-medium text-destructive flex items-center gap-1">
              <AlertCircle className="size-3" />
              {activeErrors.email}
            </span>
          )}
        </div>
        <Input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={(e) => handleChange("email", e)}
          onBlur={() => handleBlur("email")}
          placeholder="alex@example.com"
          disabled={isPending}
          aria-invalid={!!activeErrors.email}
          className={cn(
            "h-11 rounded-xl bg-background/50 text-sm transition-all focus-visible:ring-primary/30",
            activeErrors.email &&
              "border-destructive/60 focus-visible:ring-destructive/30"
          )}
        />
      </div>

      {/* Message Field */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-center">
          <Label
            htmlFor="message"
            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Message
          </Label>
          <div className="flex items-center gap-3">
            {activeErrors.message && (
              <span className="text-[11px] font-medium text-destructive flex items-center gap-1">
                <AlertCircle className="size-3" />
                {activeErrors.message}
              </span>
            )}
            <span
              className={cn(
                "text-[10px] font-mono",
                values.message.length > 2800
                  ? "text-destructive font-bold"
                  : "text-muted-foreground/60"
              )}
            >
              {values.message.length}/3000
            </span>
          </div>
        </div>
        <Textarea
          id="message"
          name="message"
          value={values.message}
          onChange={(e) => handleChange("message", e)}
          onBlur={() => handleBlur("message")}
          placeholder="Tell me about your project, timeline, or engineering inquiry..."
          rows={4}
          disabled={isPending}
          aria-invalid={!!activeErrors.message}
          className={cn(
            "min-h-[120px] resize-y rounded-xl bg-background/50 text-sm transition-all focus-visible:ring-primary/30",
            activeErrors.message &&
              "border-destructive/60 focus-visible:ring-destructive/30"
          )}
        />
      </div>

      {/* General Form Error / Rate limit notification */}
      {state.error && !state.fieldErrors && (
        <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-3.5 text-xs text-destructive flex items-start gap-2.5">
          <AlertCircle className="size-4 shrink-0 mt-0.5" />
          <span>{state.error}</span>
        </div>
      )}

      {/* Success Notification */}
      {state.success && (
        <div className="rounded-xl border border-primary/30 bg-primary/10 p-3.5 text-xs text-primary flex items-start gap-2.5">
          <CheckCircle2 className="size-4 shrink-0 mt-0.5" />
          <span>Message received. I will review and reply to your email shortly.</span>
        </div>
      )}

      <Button
        type="submit"
        disabled={isPending}
        className="w-full h-11 rounded-xl font-semibold gap-2 transition-all shadow-sm"
      >
        {isPending ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="size-4" />
            <span>Send Message</span>
          </>
        )}
      </Button>
    </form>
  );
}
