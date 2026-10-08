import { profile } from "@/data/profile";

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

/**
 * Frontend integration point for a future email service (Resend, Formspree, etc.).
 * Currently opens a mailto draft so the form is usable without a backend.
 */
export async function submitContact(payload: ContactPayload): Promise<void> {
  // TODO: Replace with API route + email provider.
  const subject = encodeURIComponent(`Portfolio contact from ${payload.name}`);
  const body = encodeURIComponent(
    `${payload.message}\n\n${payload.name}\n${payload.email}`
  );
  const mailto = `mailto:${profile.email}?subject=${subject}&body=${body}`;

  await new Promise((resolve) => setTimeout(resolve, 600));
  window.location.href = mailto;
}
