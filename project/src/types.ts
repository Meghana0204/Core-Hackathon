export interface StakingOption {
  protocol: string;
  apy: number;
  token: string;
  description: string;
  risk: 'Low' | 'Medium' | 'High';
  minAmount: number;
}

export interface UserIntent {
  token: string;
  prioritizeApy: boolean;
  riskTolerance: 'Low' | 'Medium' | 'High';
}