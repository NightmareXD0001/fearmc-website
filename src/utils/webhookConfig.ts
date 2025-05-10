
/**
 * Configuration file for Discord webhook URLs
 * These webhooks will be used by the application to send notifications to Discord channels
 */

// Configuration object for Discord webhooks
export const discordWebhooks = {
  // Default webhook for event registrations - change this URL to your own Discord webhook
  eventRegistrations: process.env.DISCORD_EVENT_WEBHOOK || "",
  
  // You can add more webhook URLs for different purposes here
  // For example:
  // supportRequests: "https://discord.com/api/webhooks/your-webhook-url",
  // serverNotifications: "https://discord.com/api/webhooks/your-webhook-url",
};
