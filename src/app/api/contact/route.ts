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
      const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
      const secure = process.env.SMTP_SECURE === 'true';

      if (host && user && pass) {
        const transporter = nodemailer.createTransport({
          host,
          port: port || 587,
          secure: !!secure,
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

        if (mailResult) emailSent = true;
      }
    } catch (mailErr) {
      emailError = String(mailErr);
      // eslint-disable-next-line no-console
      console.error('Mail send failed:', mailErr);
    }

    return NextResponse.json({ 
      ok: true, 
      emailed: emailSent, 
      error: emailError || null 
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
