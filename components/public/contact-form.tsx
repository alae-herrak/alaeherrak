"use client";

import React, { useActionState, useEffect, useRef, useState } from "react";
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
import { useLanguage } from "@/lib/i18n";

const initialState: ContactActionState = {
  success: false,
};

export function ContactForm() {
  const { t } = useLanguage();
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
      if (!trimmed) return t.contact.errors.nameRequired;
      if (trimmed.length < 2) return t.contact.errors.nameMin;
      if (trimmed.length > 80) return t.contact.errors.nameMax;
    }
    if (name === "email") {
      if (!trimmed) return t.contact.errors.emailRequired;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) {
        return t.contact.errors.emailInvalid;
      }
      if (trimmed.length > 120) return t.contact.errors.emailMax;
    }
    if (name === "message") {
      if (!trimmed) return t.contact.errors.messageRequired;
      if (trimmed.length < 10) return t.contact.errors.messageMin;
      if (trimmed.length > 3000) return t.contact.errors.messageMax;
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
      toast.error(t.contact.errors.nameRequired);
      return;
    }
  };

  useEffect(() => {
    if (state.success && state.timestamp) {
      toast.success(t.contact.successToast);
      formRef.current?.reset();
      setValues({ name: "", email: "", message: "" });
      setTouched({});
      setClientErrors({});
    } else if (state.error && state.timestamp) {
      toast.error(t.contact.errorToast, {
        description: state.error,
      });
    }
  }, [state, t]);

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
            {t.contact.nameLabel}
          </Label>
          <div id="name-error" aria-live="polite" className="min-h-[16px]">
            {activeErrors.name && (
              <span className="text-[11px] font-medium text-destructive flex items-center gap-1">
                <AlertCircle className="size-3" aria-hidden="true" />
                {activeErrors.name}
              </span>
            )}
          </div>
        </div>
        <Input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={(e) => handleChange("name", e)}
          onBlur={() => handleBlur("name")}
          placeholder={t.contact.namePlaceholder}
          disabled={isPending}
          aria-invalid={!!activeErrors.name}
          aria-describedby={activeErrors.name ? "name-error" : undefined}
          className={cn(
            "h-11 rounded-xl bg-background/50 text-sm transition-all focus-visible:ring-2 focus-visible:ring-primary/40",
            activeErrors.name &&
              "border-destructive/60 focus-visible:ring-destructive/40"
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
            {t.contact.emailLabel}
          </Label>
          <div id="email-error" aria-live="polite" className="min-h-[16px]">
            {activeErrors.email && (
              <span className="text-[11px] font-medium text-destructive flex items-center gap-1">
                <AlertCircle className="size-3" aria-hidden="true" />
                {activeErrors.email}
              </span>
            )}
          </div>
        </div>
        <Input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={(e) => handleChange("email", e)}
          onBlur={() => handleBlur("email")}
          placeholder={t.contact.emailPlaceholder}
          disabled={isPending}
          aria-invalid={!!activeErrors.email}
          aria-describedby={activeErrors.email ? "email-error" : undefined}
          className={cn(
            "h-11 rounded-xl bg-background/50 text-sm transition-all focus-visible:ring-2 focus-visible:ring-primary/40",
            activeErrors.email &&
              "border-destructive/60 focus-visible:ring-destructive/40"
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
            {t.contact.messageLabel}
          </Label>
          <div className="flex items-center gap-3">
            <div id="message-error" aria-live="polite" className="min-h-[16px]">
              {activeErrors.message && (
                <span className="text-[11px] font-medium text-destructive flex items-center gap-1">
                  <AlertCircle className="size-3" aria-hidden="true" />
                  {activeErrors.message}
                </span>
              )}
            </div>
            <span
              id="message-char-count"
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
          placeholder={t.contact.messagePlaceholder}
          rows={4}
          disabled={isPending}
          aria-invalid={!!activeErrors.message}
          aria-describedby={
            activeErrors.message
              ? "message-error message-char-count"
              : "message-char-count"
          }
          className={cn(
            "min-h-[120px] resize-y rounded-xl bg-background/50 text-sm transition-all focus-visible:ring-2 focus-visible:ring-primary/40",
            activeErrors.message &&
              "border-destructive/60 focus-visible:ring-destructive/40"
          )}
        />
      </div>

      {/* General Form Error / Rate limit notification */}
      {state.error && !state.fieldErrors && (
        <div
          role="alert"
          aria-live="polite"
          className="rounded-xl border border-destructive/30 bg-destructive/10 p-3.5 text-xs text-destructive flex items-start gap-2.5"
        >
          <AlertCircle className="size-4 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{state.error}</span>
        </div>
      )}

      {/* Success Notification */}
      {state.success && (
        <div
          role="status"
          aria-live="polite"
          className="rounded-xl border border-primary/30 bg-primary/10 p-3.5 text-xs text-primary flex items-start gap-2.5"
        >
          <CheckCircle2 className="size-4 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{t.contact.successToast}</span>
        </div>
      )}

      <Button
        type="submit"
        disabled={isPending}
        aria-disabled={isPending}
        className="w-full h-11 rounded-xl font-semibold gap-2 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        {isPending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            <span>{t.contact.sendingButton}</span>
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden="true" />
            <span>{t.contact.sendButton}</span>
          </>
        )}
      </Button>
    </form>
  );
}
