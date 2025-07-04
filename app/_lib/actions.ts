// app/actions/sendContactEmail.js
"use server";

import { Resend } from "resend";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    await resend.emails.send({
      from: `${name} <noreply@resend.dev>`,
      to: process.env.NEXT_PUBLIC_RECEIVER_EMAIL as string,
      subject: "New Contact Us Message",
      text: `You received a new message:\n\nFrom: ${name} (${email})\n\n${message}`,
    });

    return { success: true };
  } catch (error) {
    if (typeof error === "string") return { success: false, error };
  }
}
