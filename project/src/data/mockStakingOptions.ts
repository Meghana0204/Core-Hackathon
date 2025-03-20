import { StakingOption } from '../types';

export const stakingOptions: StakingOption[] = [
  {
    protocol: 'stCORE',
    apy: 12.5,
    token: 'CORE',
    description: 'Liquid staking with stCORE',
    risk: 'Low',
    minAmount: 1
  },
  {
    protocol: 'B14G Dual Staking',
    apy: 18.2,
    token: 'CORE',
    description: 'Dual rewards with B14G tokens',
    risk: 'Medium',
    minAmount: 10
  },
  {
    protocol: 'Pell Protocol',
    apy: 22.4,
    token: 'CORE',
    description: 'High yield farming pool',
    risk: 'High',
    minAmount: 5
  }
];