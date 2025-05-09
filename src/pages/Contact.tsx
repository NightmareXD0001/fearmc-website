
import { useState } from 'react';
import { toast } from 'sonner';
import PageLayout from '@/components/layout/PageLayout';
import Header from '@/components/layout/Header';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to a backend
    console.log('Form submitted:', formData);
    
    // Show success message
    toast.success("Message sent successfully! We'll be in touch soon.");
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <PageLayout>
      <Header serverStatus={null} />
      
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
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-fear-darkgray/50 border border-white/10 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-fear-red/50 glow-hover"
                  />
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
