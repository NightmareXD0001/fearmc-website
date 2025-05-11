
/**
 * Configuration file for Discord webhook URLs
 * These webhooks will be used by the application to send notifications to Discord channels
 */

// Configuration object for Discord webhooks
export const discordWebhooks = {
  // Default webhook for event registrations - change this URL to your own Discord webhook
  eventRegistrations: process.env.DISCORD_EVENT_WEBHOOK || "https://discord.com/api/webhooks/your-webhook-url",
  
  // You can add more webhook URLs for different purposes here
  // For example:
  // supportRequests: "https://discord.com/api/webhooks/your-webhook-url",
  // serverNotifications: "https://discord.com/api/webhooks/your-webhook-url",
};

// Function to securely send data to Discord webhooks
export const sendToDiscordWebhook = async (webhookType: keyof typeof discordWebhooks, data: any) => {
  const webhookUrl = discordWebhooks[webhookType];
  
  if (!webhookUrl || webhookUrl.includes('your-webhook-url')) {
    console.log('Webhook URL not configured', { type: webhookType, data });
    return { success: false, message: "Webhook not configured" };
  }
  
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`Discord webhook error: ${response.statusText}`);
    }
    
    return { success: true };
  } catch (error) {
    console.error("Error sending to Discord webhook:", error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : "Unknown error" 
    };
  }
};
