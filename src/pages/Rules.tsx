
import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Header from '@/components/layout/Header';
import { serverRules } from '@/utils/rulesConfig';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Rules = () => {
  // Group rules by category
  const rulesByCategory = serverRules.reduce((acc, rule) => {
    if (!acc[rule.category]) {
      acc[rule.category] = [];
    }
    acc[rule.category].push(rule);
    return acc;
  }, {} as Record<string, typeof serverRules>);

  const categories = Object.keys(rulesByCategory);
  const [openCategory, setOpenCategory] = useState<string | null>(categories[0] || null);

  return (
    <PageLayout>
      <Header serverStatus={null} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2 text-white">Server Rules</h1>
            <p className="text-gray-300">
              Please follow these rules to ensure a fun and fair experience for everyone on FearMC.
            </p>
          </div>
          
          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category} className="glass-card rounded-xl overflow-hidden">
                {/* Category Header - Clickable */}
                <button
                  className="w-full p-4 flex justify-between items-center bg-fear-darkgray/70 hover:bg-fear-darkgray/90 transition-colors"
                  onClick={() => setOpenCategory(openCategory === category ? null : category)}
                >
                  <h2 className="text-xl font-bold text-white">{category}</h2>
                  {openCategory === category ? (
                    <ChevronUp className="h-5 w-5 text-gray-300" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-300" />
                  )}
                </button>
                
                {/* Rules */}
                {openCategory === category && (
                  <div className="p-5 space-y-4 animate-accordion-down">
                    {rulesByCategory[category].map((rule) => (
                      <div key={rule.id} className="border-b border-white/5 pb-4 last:border-b-0 last:pb-0">
                        <h3 className="font-medium text-white mb-2">
                          {rule.id}. {rule.title}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {rule.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 glass-card rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4 text-white">Rule Enforcement</h2>
            <p className="text-gray-300 mb-3">
              Our staff team enforces these rules to maintain a positive environment for all players.
              Violations may result in warnings, temporary bans, or permanent bans depending on the severity.
            </p>
            <p className="text-gray-300">
              If you have questions about the rules or wish to report a violation,
              please contact our staff team through Discord.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Rules;
