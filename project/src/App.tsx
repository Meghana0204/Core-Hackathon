import React, { useState } from 'react';
import { IntentForm } from './components/IntentForm';
import { StakingOptionCard } from './components/StakingOptionCard';
import { stakingOptions } from './data/mockStakingOptions';
import { StakingOption, UserIntent } from './types';
import { Wallet, Sparkles, TrendingUp } from 'lucide-react';

function App() {
  const [filteredOptions, setFilteredOptions] = useState<StakingOption[]>([]);
  const [showOptions, setShowOptions] = useState(false);

  const handleIntentSubmit = (intent: UserIntent) => {
    let options = [...stakingOptions];
    
    // Filter by risk tolerance
    options = options.filter(option => {
      if (intent.riskTolerance === 'Low') return option.risk === 'Low';
      if (intent.riskTolerance === 'Medium') return option.risk !== 'High';
      return true;
    });

    // Sort by priority
    options.sort((a, b) => intent.prioritizeApy ? b.apy - a.apy : 0);

    setFilteredOptions(options);
    setShowOptions(true);
  };

  const handleStake = (option: StakingOption) => {
    // In a real app, this would trigger wallet connection and staking transaction
    alert(`Staking flow initiated for ${option.protocol}\nThis would connect to your wallet and execute the staking transaction.`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-blue-400 mr-3" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Smart Yield Finder
            </h1>
          </div>
          <p className="text-gray-400 text-lg">
            Tell us your goals, we'll find the best yields
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-2xl p-8 mb-12 border border-gray-700">
          <IntentForm onIntentSubmit={handleIntentSubmit} />
        </div>

        {showOptions && (
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-gray-100 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-blue-400" />
              Recommended Options
            </h2>
            {filteredOptions.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2">
                {filteredOptions.map((option) => (
                  <StakingOptionCard
                    key={option.protocol}
                    option={option}
                    onStake={handleStake}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-800 rounded-xl border border-gray-700">
                <Wallet className="mx-auto h-16 w-16 text-gray-600 mb-4" />
                <p className="text-gray-400 text-lg">
                  No options match your criteria. Try adjusting your preferences.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;