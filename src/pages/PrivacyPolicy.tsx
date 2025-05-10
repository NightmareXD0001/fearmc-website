
import PageLayout from '@/components/layout/PageLayout';

const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto glass-card p-8 rounded-xl">
          <h1 className="text-3xl font-bold mb-6 text-fear-red">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="mb-4">
              Last updated: May 10, 2025
            </p>
            
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
              <p>
                Welcome to FearMC! This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you use our website and services. Please read this privacy policy carefully. If you do not 
                agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4">2. Information We Collect</h2>
              <p className="mb-3">
                <strong>Personal Data</strong>: When you register for an account, we may collect personally identifiable 
                information, such as your name, email address, and Minecraft username.
              </p>
              <p className="mb-3">
                <strong>Server Data</strong>: We collect information about your gameplay within our Minecraft servers, 
                including your interactions, chat logs, and game statistics.
              </p>
              <p className="mb-3">
                <strong>Usage Data</strong>: We may also collect information on how the website is accessed and used. This 
                data may include your computer's Internet Protocol address (IP), browser type, browser version, the pages 
                you visit, the time and date of your visit, and other diagnostic data.
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-5 mb-4">
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To allow you to participate in interactive features when you choose to do so</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information for improving our services</li>
                <li>To monitor the usage of our services</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4">4. Security of Your Information</h2>
              <p>
                The security of your information is important to us, but remember that no method of transmission over 
                the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means 
                to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4">5. Children's Privacy</h2>
              <p>
                Our services are not intended for use by children under the age of 13. We do not knowingly collect 
                personally identifiable information from children under 13. If you are a parent or guardian and you 
                are aware that your child has provided us with personal data, please contact us.
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4">6. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically 
                for any changes.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@fearmc.net.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
