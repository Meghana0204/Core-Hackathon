import React from 'react';
import { StakingOption } from '../types';
import { TrendingUp, Shield, Coins, ArrowRight } from 'lucide-react';

interface StakingOptionCardProps {
  option: StakingOption;
  onStake: (option: StakingOption) => void;
}

export function StakingOptionCard({ option, onStake }: StakingOptionCardProps) {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'High': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getRiskBorder = (risk: string) => {
    switch (risk) {
      case 'Low': return 'border-green-900';
      case 'Medium': return 'border-yellow-900';
      case 'High': return 'border-red-900';
      default: return 'border-gray-700';
    }
  };

  return (
    <div className={`bg-gray-800 rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border ${getRiskBorder(option.risk)}`}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-100 mb-2">{option.protocol}</h3>
          <p className="text-gray-400">{option.description}</p>
        </div>
        <div className={`flex items-center ${getRiskColor(option.risk)} bg-gray-900 px-3 py-1 rounded-full`}>
          <Shield className="w-4 h-4 mr-1" />
          <span className="text-sm">{option.risk} Risk</span>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <TrendingUp className="w-6 h-6 text-blue-400 mr-2" />
          <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {option.apy}% APY
          </span>
        </div>
        <div className="flex items-center text-gray-400 bg-gray-900 px-3 py-1 rounded-full">
          <Coins className="w-4 h-4 mr-2" />
          <span>Min: {option.minAmount} {option.token}</span>
        </div>
      </div>

      <button
        onClick={() => onStake(option)}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
      >
        Stake Now
        <ArrowRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  );
}