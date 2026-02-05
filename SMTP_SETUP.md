SMTP setup and testing
======================

Place SMTP credentials in a local `.env.local` file at the project root (do NOT commit it).

Required vars (example values shown in `.env.example`):

- `SMTP_HOST` – your SMTP host (e.g., `smtp.sendgrid.net`).
- `SMTP_PORT` – port (commonly `587`).
- `SMTP_USER` – SMTP user (SendGrid uses `apikey` as username).
- `SMTP_PASS` – SMTP password or API key.
- `SMTP_SECURE` – `true` for TLS on port 465, otherwise `false`.
- `SMTP_FROM` – optional `From` address (e.g., `"Personal Branding Coach <no-reply@example.com>"`).

Quick test (local):

1. Install dependencies (if not already):

```bash
npm install
```

2. Create `.env.local` in the project root and add your SMTP vars (copy from `.env.example`).

3. Run the test email script which will try your SMTP settings; if absent it will use an Ethereal test account and print a preview URL:

```bash
npm run test-email
```

Notes:
- If you use the Ethereal fallback the message will not be delivered to real inboxes — it's for local verification only and will show a preview URL in the console.
- After adding real SMTP credentials, restart the dev server so env vars are loaded.
