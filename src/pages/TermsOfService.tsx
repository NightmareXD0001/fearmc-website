
import PageLayout from '@/components/layout/PageLayout';

const TermsOfService = () => {
  return (
    <PageLayout>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto glass-card p-8 rounded-xl">
          <h1 className="text-3xl font-bold mb-6 text-fear-red">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="mb-4">
              Last updated: May 10, 2025
            </p>
            
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using the FearMC website and Minecraft server, you agree to be bound by these 
                Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, 
                you are prohibited from using or accessing FearMC's services.
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4">2. Use License</h2>
              <p className="mb-3">
                Permission is granted to temporarily access the materials on FearMC's website for personal, 
                non-commercial viewing only. This is the grant of a license, not a transfer of title, and under this 
                license you may not:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on FearMC's servers</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              <p>
                This license shall automatically terminate if you violate any of these restrictions and may be 
                terminated by FearMC at any time.
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4">3. Server Rules and Conduct</h2>
              <p className="mb-3">
                When playing on the FearMC Minecraft server, you agree to:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Follow all server-specific rules as posted on our website and in-game</li>
                <li>Not engage in cheating, hacking, or exploiting game mechanics</li>
                <li>Treat all players and staff with respect</li>
                <li>Not engage in any behavior that disrupts the gameplay experience of others</li>
                <li>Not advertise other servers or services</li>
              </ul>
              <p>
                Violation of these rules may result in temporary or permanent ban from our services.
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4">4. Purchases and Refunds</h2>
              <p>
                All purchases made through our store are final. We do not offer refunds except in exceptional 
                circumstances at the sole discretion of FearMC management. By making a purchase, you 
                acknowledge that you have read and agree to our refund policy.
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4">5. Account Security</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account and password and for 
                restricting access to your computer. You agree to accept responsibility for all activities that 
                occur under your account or password.
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4">6. Disclaimer</h2>
              <p>
                The materials on FearMC's website and server are provided "as is". FearMC makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties, including without 
                limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
                or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4">7. Limitations</h2>
              <p>
                In no event shall FearMC or its suppliers be liable for any damages arising out of the use or 
                inability to use the materials on FearMC's website or server, even if FearMC or an authorized 
                representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold mb-4">8. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at terms@fearmc.net.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsOfService;
