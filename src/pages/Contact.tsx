import { useState } from 'react';
import { toast } from 'sonner';
import PageLayout from '@/components/layout/PageLayout';

const Contact = () => {
  const [formData, setFormData] = useState({
    discordUsername: '',
    discordId: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.fearmc.net/api/contact-send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();

      toast.success("Message sent successfully! We'll be in touch soon.");

      setFormData({
        discordUsername: '',
        discordId: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending contact form:', error);
      toast.error('Oops! Something went wrong. Please try again later.');
    }
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2 text-white">Contact Us</h1>
            <p className="text-gray-300">
              Have questions or feedback? Get in touch with the FearMC team!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 text-white">Send a Message</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="discordUsername" className="block text-gray-300 mb-2">
                    Discord Username
                  </label>
                  <input
                    type="text"
                    id="discordUsername"
                    name="discordUsername"
                    value={formData.discordUsername}
                    onChange={handleChange}
                    required
                    className="w-full bg-fear-darkgray/50 border border-white/10 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-fear-red/50 glow-hover"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="discordId" className="block text-gray-300 mb-2">
                    Discord ID
                  </label>
                  <input
  type="text"
  id="discordId"
  name="discordId"
  value={formData.discordId}
  onChange={handleChange}
  required
  pattern="^[0-9]+$"
  title="Discord ID must be numeric"
  className="w-full bg-fear-darkgray/50 border border-white/10 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-fear-red/50 glow-hover"
/>
                  <p className="text-sm text-gray-400 mt-1">
                    Use <code className="bg-black/30 px-1 rounded">/getid</code> in our Discord to get your ID.
                  </p>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-fear-darkgray/50 border border-white/10 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-fear-red/50 glow-hover"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-fear-darkgray/50 border border-white/10 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-fear-red/50 glow-hover"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-fear-red hover:bg-fear-red/80 text-white font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Discord Section */}
            <div className="space-y-6">
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="bg-[#5865F2] p-4">
                  <h2 className="text-white font-bold text-lg">Join Our Discord</h2>
                </div>

                <div className="p-5 text-center">
                  <p className="text-gray-300 mb-5">
                    The fastest way to get support is through our Discord server. Join our community of players and staff!
                  </p>

                  <a
                    href="https://discord.gg/fearmc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2.5 rounded-full bg-[#5865F2] hover:bg-[#4752C4] transition-colors text-white font-medium"
                  >
                    Join Discord
                  </a>

                  <div className="mt-5 p-3 bg-fear-darkgray/30 rounded-lg text-sm text-gray-300">
                    Our support team is available daily from 9 AM to 11 PM EST.
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-white">Other Ways to Connect</h2>

                <ul className="space-y-4 text-gray-300">
                  <li>
                    <strong>Email:</strong> support@fearmc.net
                  </li>
                  <li>
                    <strong>Twitter:</strong> @FearMC
                  </li>
                  <li>
                    <strong>In-Game:</strong> Contact a staff member using /msg
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
