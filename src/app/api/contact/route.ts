import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Attempt to send email if SMTP is configured via environment variables
    const RECIPIENT = 'iamujustevens@gmail.com';
    let emailSent = false;
    let emailError: string | null = null;

    try {
      const host = process.env.SMTP_HOST;
      const user = process.env.SMTP_USER;
      const pass = process.env.SMTP_PASS;
      const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
      const secure = process.env.SMTP_SECURE === 'true';

      if (host && user && pass) {
        const transporter = nodemailer.createTransport({
          host,
          port,
          secure,
          auth: { user, pass },
        });

        const mailResult = await transporter.sendMail({
          from: process.env.SMTP_FROM || user,
          replyTo: email,
          to: RECIPIENT,
          subject: `Website contact: ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><hr/><p>${message.replace(/\n/g, '<br/>')}</p>`,
        });

        // Check if email was successfully sent (messageId indicates success)
        if (mailResult && mailResult.messageId) {
          emailSent = true;

          // Send confirmation email to the user
          try {
            await transporter.sendMail({
              from: process.env.SMTP_FROM || user,
              to: email,
              subject: 'We received your message',
              text: `Hi ${name},\n\nThank you for reaching out! I've received your message and will get back to you as soon as possible.\n\nBest regards,\nUju Ruth Stevens\nWomen's Identity & Clarity Coach`,
              html: `<p>Hi ${name},</p><p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p><p>Best regards,<br/><strong>Uju Ruth Stevens</strong><br/>Women's Identity & Clarity Coach</p>`,
            });
          } catch (confirmErr) {
            // Confirmation email failed, but main email was sent - don't treat as error
            console.warn('Confirmation email failed:', confirmErr);
          }
        }
      }
    } catch (mailErr) {
      emailError = String(mailErr);
      console.error('Mail send failed:', mailErr);
    }

    return NextResponse.json({ 
      ok: true, 
      emailed: emailSent, 
      error: emailError || null 
    });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
