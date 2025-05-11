// File: /api/test-env.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({
    webhook: process.env.DISCORD_EVENT_WEBHOOK || "Not set",
  });
}
