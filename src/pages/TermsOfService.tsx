import PageLayout from '@/components/layout/PageLayout';

const TermsOfService = () => {
  return (
    <PageLayout>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto glass-card p-8 rounded-xl">
          <h1 className="text-3xl font-bold mb-6 text-fear-red">Terms of Service</h1>

          <div className="prose prose-invert max-w-none">
            <p className="mb-4">Last updated: May 21, 2025</p>

            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the FearMC network, including our Minecraft server and online store,
                you agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree
                to these Terms, you may not use our services.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4">2. Compliance with Rules and Law</h2>
              <p className="mb-3">
                All users must adhere to:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>
                  <strong>FearMC Rules:</strong> You must follow all in-game and community rules, as outlined on our 
                  official Rules page. The use of the store or other services does not exempt you from disciplinary 
                  action.
                </li>
                <li>
                  <strong>Applicable Laws:</strong> You must comply with all relevant local, national, and international 
                  cyber laws. Violation may result in immediate account termination and reporting to authorities.
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4">3. Store Purchases, Reimbursements, and Refunds</h2>
              <p className="mb-4">
                The following conditions apply to all purchases made through the FearMC store.
              </p>

              <h3 className="font-semibold mb-2">Reimbursements:</h3>
              <p className="mb-2">You may be eligible for reimbursement under the following circumstances:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Store-bought items lost due to accidental server crashes.</li>
                <li>Store-bought items lost as a result of rule-breaking by other players.</li>
                <li>Store-bought items lost due to verified bugs or glitches.</li>
              </ul>

              <h3 className="font-semibold mb-2">Refunds:</h3>
              <p>
                Refunds are available to any unsatisfied customer, but initiating a refund will result in reversal or 
                removal of the purchased digital goods. Refund decisions are made at the sole discretion of FearMC 
                management. Chargebacks without prior communication may result in a permanent ban.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4">4. Limited License</h2>
              <p className="mb-3">
                You are granted a limited, non-exclusive, non-transferable license to access and use FearMC 
                materials for personal, non-commercial purposes. Under this license, you may not:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Modify or copy the materials.</li>
                <li>Use them for commercial gain or public display.</li>
                <li>Attempt to decompile or reverse engineer any FearMC software.</li>
                <li>Remove copyright or proprietary notations.</li>
                <li>Mirror or redistribute the materials on other servers.</li>
              </ul>
              <p>
                This license is automatically terminated if you violate any of these restrictions.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4">5. Server Behavior and Community Conduct</h2>
              <p className="mb-3">Users agree to:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Follow all posted and in-game rules.</li>
                <li>Not cheat, hack, exploit, or abuse mechanics.</li>
                <li>Respect other players and staff members.</li>
                <li>Avoid behavior that disrupts gameplay or the community.</li>
                <li>Not advertise external servers, products, or services.</li>
              </ul>
              <p>
                Violations may result in a warning, suspension, or permanent ban without prior notice.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4">6. Account Responsibility</h2>
              <p>
                You are solely responsible for your account. Do not share your login credentials. FearMC is not liable
                for losses or damages arising from unauthorized use of your account.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4">7. Disclaimers</h2>
              <p>
                FearMC services are provided "as is." We make no warranties, express or implied, including but not 
                limited to merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4">8. Limitation of Liability</h2>
              <p>
                In no event shall FearMC, its owners, or affiliates be liable for any damages arising out of the 
                inability to use our services, including but not limited to data loss, account issues, or 
                service interruptions.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-bold mb-4">9. Changes to Terms</h2>
              <p>
                FearMC reserves the right to update or change these Terms at any time. It is your responsibility 
                to review this page periodically. Continued use of our services after changes indicates 
                acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">10. Contact Us</h2>
              <p>
                For questions or concerns about these Terms, contact us at <a href="mailto:terms@fearmc.net">terms@fearmc.net</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsOfService;
