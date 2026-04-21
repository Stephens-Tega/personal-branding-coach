Email setup and testing
=======================

This project now sends contact emails through Resend instead of direct SMTP.

Add the following values to your local `.env.local` file:

- `RESEND_API_KEY` - your Resend API key, which starts with `re_`
- `RESEND_FROM` - optional sender address. For testing, you can use `"Personal Branding Coach <onboarding@resend.dev>"`. For production, switch this to a verified domain in Resend.
- `TEST_EMAIL_TO` - optional address used by the local test script. If omitted, the script sends to `delivered@resend.dev`.

Quick setup:

1. Create a Resend API key.
2. Add `RESEND_API_KEY` to `.env.local`.
3. For production sending, verify your sending domain in Resend and set `RESEND_FROM` to that address.
4. Restart the dev server after changing env vars.

Quick test:

```bash
npm run test-email
```

Notes:
- The contact API now ignores the old `SMTP_*` variables.
- If you have not verified a domain yet, keep `RESEND_FROM` on `onboarding@resend.dev` for initial testing.
- Once your domain is verified, update the `from` address so your contact emails come from your own domain.
