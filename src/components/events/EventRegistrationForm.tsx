
import { useState } from "react";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface EventRegistrationFormProps {
  eventId: number;
  eventName: string;
  onClose: () => void;
}

// Form schema
const formSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  discordId: z.string().optional(),
  age: z.string().min(1, "Please select your age group"),
  experience: z.string().min(1, "Please select your experience level"),
  additionalInfo: z.string().optional(),
  webhookUrl: z.string().url("Please enter a valid webhook URL").optional(),
});

type FormValues = z.infer<typeof formSchema>;

const EventRegistrationForm = ({ eventId, eventName, onClose }: EventRegistrationFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showWebhookField, setShowWebhookField] = useState(false);

  // Form definition
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      discordId: "",
      age: "",
      experience: "",
      additionalInfo: "",
      webhookUrl: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Create the Discord embed
      const embed = {
        title: `New Registration for: ${eventName}`,
        color: 0xfb3c3c, // Fear-red color
        fields: [
          { name: "Username", value: data.username, inline: true },
          { name: "Email", value: data.email, inline: true },
          { name: "Discord ID", value: data.discordId || "Not provided", inline: true },
          { name: "Age Group", value: data.age, inline: true },
          { name: "Experience Level", value: data.experience, inline: true },
          { name: "Additional Info", value: data.additionalInfo || "None", inline: false },
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: `Event ID: ${eventId}`,
        },
      };

      const webhookUrl = data.webhookUrl || "";
      
      if (webhookUrl) {
        // Send to Discord webhook if provided
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            embeds: [embed],
          }),
        });
        
        toast({
          title: "Registration successful!",
          description: "Your registration has been sent to Discord.",
        });
      } else {
        // Mock submission
        console.log("Registration data:", data);
        console.log("Discord embed:", embed);
        
        toast({
          title: "Registration successful!",
          description: "Your registration has been received.",
        });
      }
      
      // Close the form
      onClose();
    } catch (error) {
      console.error("Error submitting registration:", error);
      toast({
        title: "Registration failed",
        description: "There was an error submitting your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-fear-darkgray">
      <div className="flex items-center justify-between p-5 border-b border-white/10 bg-fear-black/50">
        <h3 className="font-bungee text-xl text-white">
          Register for {eventName}
        </h3>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-white/10 transition-colors"
        >
          <X size={20} />
        </button>
      </div>
      
      <div className="p-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Minecraft Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your Minecraft username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="discordId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discord ID (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. username#1234" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Age Group</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Under 18" />
                        </FormControl>
                        <FormLabel className="font-normal">Under 18</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="18-24" />
                        </FormControl>
                        <FormLabel className="font-normal">18-24</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="25+" />
                        </FormControl>
                        <FormLabel className="font-normal">25+</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Minecraft Experience</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Beginner" />
                        </FormControl>
                        <FormLabel className="font-normal">Beginner</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Intermediate" />
                        </FormControl>
                        <FormLabel className="font-normal">Intermediate</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Expert" />
                        </FormControl>
                        <FormLabel className="font-normal">Expert</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Information (optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any other information you'd like to share"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowWebhookField(!showWebhookField)}
                className="text-sm text-fear-red hover:text-fear-red/80 transition-colors"
              >
                {showWebhookField ? "Hide Discord Webhook" : "Configure Discord Webhook"}
              </button>
              
              {showWebhookField && (
                <FormField
                  control={form.control}
                  name="webhookUrl"
                  render={({ field }) => (
                    <FormItem className="mt-3">
                      <FormLabel>Discord Webhook URL</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="https://discord.com/api/webhooks/..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                      <p className="text-xs text-gray-400 mt-1">
                        This will send the registration as an embed to your Discord channel.
                      </p>
                    </FormItem>
                  )}
                />
              )}
            </div>
            
            <div className="flex justify-end space-x-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-fear-red hover:bg-fear-red/80 text-white"
              >
                {isSubmitting ? "Submitting..." : "Register"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default EventRegistrationForm;
