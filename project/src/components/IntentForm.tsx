import React from 'react';
import { UserIntent } from '../types';
import { Coins, TrendingUp, Shield } from 'lucide-react';

interface IntentFormProps {
  onIntentSubmit: (intent: UserIntent) => void;
}

export function IntentForm({ onIntentSubmit }: IntentFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    onIntentSubmit({
      token: formData.get('token') as string,
      prioritizeApy: formData.get('prioritizeApy') === 'true',
      riskTolerance: formData.get('riskTolerance') as 'Low' | 'Medium' | 'High'
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
          <Coins className="w-4 h-4 mr-2 text-blue-400" />
          Token
        </label>
        <select
          name="token"
          className="w-full bg-gray-900 text-gray-100 rounded-lg border border-gray-700 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors"
          defaultValue="CORE"
        >
          <option value="CORE">CORE</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
          <TrendingUp className="w-4 h-4 mr-2 text-blue-400" />
          Priority
        </label>
        <select
          name="prioritizeApy"
          className="w-full bg-gray-900 text-gray-100 rounded-lg border border-gray-700 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors"
        >
          <option value="true">Highest APY</option>
          <option value="false">Lowest Risk</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
          <Shield className="w-4 h-4 mr-2 text-blue-400" />
          Risk Tolerance
        </label>
        <select
          name="riskTolerance"
          className="w-full bg-gray-900 text-gray-100 rounded-lg border border-gray-700 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Find Best Options
      </button>
    </form>
  );
}