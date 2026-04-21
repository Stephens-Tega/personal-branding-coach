import { NextResponse } from "next/server";
import { getResendClient } from "@/lib/resend";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getPublicSendErrorMessage(error: unknown) {
  const message =
    typeof error === "object" && error && "message" in error
      ? String(error.message)
      : "";

  if (
    message.toLowerCase().includes("api key") ||
    message.toLowerCase().includes("unauthorized") ||
    message.toLowerCase().includes("forbidden")
  ) {
    return "Email delivery is not configured correctly right now. Please contact me on WhatsApp while this is being fixed.";
  }

  if (message.toLowerCase().includes("rate limit")) {
    return "Email delivery is temporarily busy right now. Please try again shortly or contact me on WhatsApp.";
  }

  return "Your message could not be delivered by email right now. Please try again later or contact me on WhatsApp.";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const resend = getResendClient();
    const recipient = "iamujustevens@gmail.com";
    const from =
      process.env.RESEND_FROM ||
      "Personal Branding Coach <onboarding@resend.dev>";

    if (!resend) {
      return NextResponse.json(
        {
          emailed: false,
          confirmationSent: false,
          error:
            "Email delivery is not configured right now. Add RESEND_API_KEY to continue, or contact me on WhatsApp while this is being fixed.",
        },
        { status: 503 },
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    const { data: ownerData, error: ownerError } = await resend.emails.send({
      from,
      to: recipient,
      replyTo: email,
      subject: `Website contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><hr/><p>${safeMessage}</p>`,
    });

    if (ownerError || !ownerData?.id) {
      console.error("Resend owner email failed:", ownerError);

      return NextResponse.json(
        {
          emailed: false,
          confirmationSent: false,
          error: getPublicSendErrorMessage(ownerError),
        },
        { status: 502 },
      );
    }

    let confirmationSent = false;

    try {
      const { data: confirmationData, error: confirmationError } =
        await resend.emails.send({
          from,
          to: email,
          subject: "We received your message",
          text: `Hi ${name},\n\nThank you for reaching out! I've received your message and will get back to you as soon as possible.\n\nBest regards,\nUju Ruth Stevens\nWomen's Identity & Clarity Coach`,
          html: `<p>Hi ${safeName},</p><p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p><p>Best regards,<br/><strong>Uju Ruth Stevens</strong><br/>Women's Identity & Clarity Coach</p>`,
        });

      confirmationSent = !confirmationError && !!confirmationData?.id;

      if (confirmationError) {
        console.warn("Resend confirmation email failed:", confirmationError);
      }
    } catch (confirmationError) {
      console.warn("Resend confirmation email failed:", confirmationError);
    }

    return NextResponse.json({
      ok: true,
      emailed: true,
      confirmationSent,
      error: null,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
