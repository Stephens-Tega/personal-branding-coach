#!/usr/bin/env node
/*
  Test script to send a sample email.
  - If SMTP env vars are present it will use them.
  - Otherwise it creates a test Ethereal account and prints a preview URL.
*/
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

// Load .env.local if present into process.env
try {
  const envPath = path.resolve(process.cwd(), '.env.local');
  if (fs.existsSync(envPath)) {
    const raw = fs.readFileSync(envPath, 'utf8');
    raw.split(/\r?\n/).forEach((line) => {
      line = line.trim();
      if (!line || line.startsWith('#')) return;
      const eq = line.indexOf('=');
      if (eq === -1) return;
      const key = line.slice(0, eq).trim();
      let val = line.slice(eq + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      if (!process.env[key]) process.env[key] = val;
    });
  }
} catch (e) {
  // ignore
}

async function main() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
  const secure = process.env.SMTP_SECURE === 'true';

  let transporter;

  if (host && user && pass) {
    console.log('Using provided SMTP settings...');
    transporter = nodemailer.createTransport({
      host,
      port: port || 587,
      secure: !!secure,
      auth: { user, pass },
    });
  } else {
    console.log('No SMTP settings detected; creating Ethereal test account...');
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: { user: testAccount.user, pass: testAccount.pass },
    });
  }

  const from = process.env.SMTP_FROM || 'no-reply@example.com';
  const to = process.env.TEST_EMAIL_TO || 'iamujustevens@gmail.com';

  const info = await transporter.sendMail({
    from,
    to,
    subject: 'Test email from Personal Branding Coach site',
    text: 'This is a test email to verify SMTP settings.',
    html: '<p>This is a <strong>test</strong> email to verify SMTP settings.</p>',
  });

  console.log('Message sent.');
  if (nodemailer.getTestMessageUrl) {
    const preview = nodemailer.getTestMessageUrl(info);
    if (preview) console.log('Preview URL:', preview);
  }
  console.log('Info:', info && info.messageId);
}

main().catch((err) => {
  console.error('Error sending test email:', err);
  process.exit(1);
});
