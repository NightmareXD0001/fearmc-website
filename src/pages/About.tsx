
import PageLayout from '@/components/layout/PageLayout';
import Header from '@/components/layout/Header';

const About = () => {
  return (
    <PageLayout>
      <Header serverStatus={null} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2 text-white">About <span className="text-fear-red">FearMC</span></h1>
            <p className="text-gray-300">
              Learn more about our Minecraft server and community
            </p>
          </div>
          
          <div className="glass-card rounded-xl overflow-hidden mb-8">
            <div className="bg-gradient-radial from-fear-red/20 to-fear-black p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Story</h2>
              
              <p className="text-gray-300 mb-4">
                FearMC was founded in 2023 by a group of passionate Minecraft players who wanted to create
                a server that balanced competitive gameplay with a friendly, welcoming community.
              </p>
              
              <p className="text-gray-300 mb-4">
                What started as a small survival server quickly grew into a multi-game network
                offering various game modes like SkyWars, BedWars, and Creative building. Today,
                FearMC hosts thousands of players daily from around the world.
              </p>
              
              <p className="text-gray-300">
                Our mission is to provide a fun, fair, and exciting Minecraft experience for players
                of all skill levels, with regular updates and events to keep the community engaged.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="glass-card rounded-xl overflow-hidden h-full">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4 text-white">Our Team</h2>
                
                <p className="text-gray-300 mb-4">
                  Behind FearMC is a dedicated team of admins, moderators, builders, and developers
                  who work tirelessly to create the best possible experience for our players.
                </p>
                
                <p className="text-gray-300">
                  Each team member brings their own unique skills and perspective, united by a
                  shared love of Minecraft and community building.
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-xl overflow-hidden h-full">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4 text-white">Server Features</h2>
                
                <ul className="text-gray-300 space-y-2">
                  <li>• Custom game modes and maps</li>
                  <li>• Regular events and tournaments</li>
                  <li>• Fair and balanced gameplay</li>
                  <li>• Active staff team</li>
                  <li>• Robust anti-cheat systems</li>
                  <li>• Vibrant community discord</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4 text-white">Join Us!</h2>
              
              <p className="text-gray-300 mb-6">
                Whether you're a casual player looking for fun, a competitive gamer seeking a challenge,
                or a creative builder looking for inspiration, FearMC has something for you!
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/"
                  className="px-6 py-2.5 rounded-full bg-fear-red hover:bg-fear-red/80 text-white font-medium transition-colors text-center"
                >
                  Play Now
                </a>
                
                <a
                  href="https://discord.gg/fearmc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#5865F2] hover:bg-[#4752C4] transition-colors text-white font-medium text-center"
                >
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
