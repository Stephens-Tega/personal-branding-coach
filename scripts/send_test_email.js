#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require("fs");
const path = require("path");
const { Resend } = require("resend");

try {
  const envPath = path.resolve(process.cwd(), ".env.local");
  if (fs.existsSync(envPath)) {
    const raw = fs.readFileSync(envPath, "utf8");
    raw.split(/\r?\n/).forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) return;

      const eq = trimmed.indexOf("=");
      if (eq === -1) return;

      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();

      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      if (!process.env[key]) {
        process.env[key] = value;
      }
    });
  }
} catch {
  // Ignore env-loading issues in the helper script.
}

async function main() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error(
      "Missing RESEND_API_KEY. Add it to .env.local before running this test.",
    );
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.RESEND_FROM ||
    "Personal Branding Coach <onboarding@resend.dev>";
  const to = process.env.TEST_EMAIL_TO || "delivered@resend.dev";

  const { data, error } = await resend.emails.send({
    from,
    to,
    subject: "Test email from Personal Branding Coach site",
    text: "This is a test email sent through Resend.",
    html: "<p>This is a <strong>test</strong> email sent through Resend.</p>",
  });

  if (error) {
    throw new Error(
      typeof error.message === "string"
        ? error.message
        : JSON.stringify(error),
    );
  }

  console.log("Message sent via Resend.");
  console.log("Email ID:", data?.id || "(missing id)");
}

main().catch((error) => {
  console.error("Error sending test email:", error);
  process.exit(1);
});
