export default function handler(req, res) {
  res.status(200).json({ webhook: process.env.DISCORD_EVENT_WEBHOOK || "Not set" });
}
