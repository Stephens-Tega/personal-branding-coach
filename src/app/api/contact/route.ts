import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

type Submission = {
  name: string;
  email: string;
  message: string;
  createdAt: string;
  emailSent?: boolean;
};

const DATA_DIR = path.resolve(process.cwd(), 'data');
const FILE_PATH = path.join(DATA_DIR, 'submissions.json');

async function ensureDataFile() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.access(FILE_PATH);
  } catch (e) {
    await fs.writeFile(FILE_PATH, '[]', 'utf8');
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    await ensureDataFile();
    const raw = await fs.readFile(FILE_PATH, 'utf8');
    const list: Submission[] = JSON.parse(raw || '[]');
    const submission: Submission = { name, email, message, createdAt: new Date().toISOString() };

    // Attempt to send email if SMTP is configured via environment variables
    const RECIPIENT = 'iamujustevens@gmail.com';
    let emailSent = false;
    try {
      const host = process.env.SMTP_HOST;
      const user = process.env.SMTP_USER;
      const pass = process.env.SMTP_PASS;
      const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
      const secure = process.env.SMTP_SECURE === 'true';

      if (host && user && pass) {
        // Try to require nodemailer at runtime without static import (avoids TS/build errors when not installed)
        let nodemailer: any = null;
        try {
          // use eval to access require in a way that circumvents static analysis
          // eslint-disable-next-line no-eval
          const maybeRequire = eval("typeof require !== 'undefined' ? require : undefined");
          if (maybeRequire) nodemailer = maybeRequire('nodemailer');
        } catch (e) {
          // ignore
        }

        if (nodemailer) {
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
      }
    } catch (mailErr) {
      // If email sending fails, continue and persist the submission with error info
      // eslint-disable-next-line no-console
      console.error('Mail send failed:', mailErr);
      // attach a short error message for diagnostics (safe to store)
      (submission as any).emailError = String(mailErr);
    }

    submission.emailSent = emailSent;
    list.push(submission);
    await fs.writeFile(FILE_PATH, JSON.stringify(list, null, 2), 'utf8');

    return NextResponse.json({ ok: true, emailed: emailSent, error: (submission as any).emailError || null });
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
