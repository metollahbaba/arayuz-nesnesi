
/**
 * Balance Manager Utility
 * Handles saving and retrieving balance information
 */

// Initialize with original card balances
const originalBalances = {
  '5113': 85,
  '4444': 34.59,
  '3303': 173
};

// Current balances (starts same as original)
let currentBalances = { ...originalBalances };

// Track if balances should be hidden
let areBalancesHidden = false;

// Save current balances to localStorage (browser's storage)
const saveBalances = () => {
  localStorage.setItem('cardBalances', JSON.stringify(currentBalances));
};

// Save balance visibility state to localStorage
const saveBalanceVisibility = () => {
  localStorage.setItem('balancesHidden', JSON.stringify(areBalancesHidden));
};

// Load balances from localStorage
const loadBalances = () => {
  const saved = localStorage.getItem('cardBalances');
  if (saved) {
    currentBalances = JSON.parse(saved);
  }
  return currentBalances;
};

// Load balance visibility from localStorage
const loadBalanceVisibility = () => {
  const saved = localStorage.getItem('balancesHidden');
  if (saved) {
    areBalancesHidden = JSON.parse(saved);
  }
  return areBalancesHidden;
};

// Reset balances to original values
const resetBalances = () => {
  currentBalances = { ...originalBalances };
  saveBalances();
  return currentBalances;
};

// Toggle balance visibility
const toggleBalanceVisibility = () => {
  areBalancesHidden = !areBalancesHidden;
  saveBalanceVisibility();
  return areBalancesHidden;
};

// Update a specific card's balance
const updateCardBalance = (cardNumber: string, amount: number) => {
  if (cardNumber in currentBalances) {
    currentBalances[cardNumber as keyof typeof currentBalances] -= amount;
    saveBalances();
  }
  return currentBalances;
};

// Get formatted balance with currency symbol
const getFormattedBalance = (cardNumber: string): string => {
  if (cardNumber in currentBalances) {
    return `${currentBalances[cardNumber as keyof typeof currentBalances]} ₼`;
  }
  return '0 ₼';
};

// Get all cards with updated balances
const getCardsWithBalances = () => {
  // Load latest balances before returning
  loadBalances();
  // Also load visibility state
  loadBalanceVisibility();
  
  return [
    {
      bankName: 'Kapital Bank ASC',
      cardNumber: '5113',
      balance: getFormattedBalance('5113'),
      minAmount: 0.01,
      maxAmount: currentBalances['5113'],
      hidden: areBalancesHidden
    },
    {
      bankName: 'Kapital Bank ASC',
      cardNumber: '4444',
      balance: getFormattedBalance('4444'),
      minAmount: 0.01,
      maxAmount: currentBalances['4444'],
      hidden: areBalancesHidden
    },
    {
      bankName: 'Kapital Bank ASC',
      cardNumber: '3303',
      balance: getFormattedBalance('3303'),
      minAmount: 0.01,
      maxAmount: currentBalances['3303'],
      hidden: areBalancesHidden
    }
  ];
};

export {
  loadBalances,
  resetBalances,
  updateCardBalance,
  getFormattedBalance,
  getCardsWithBalances,
  toggleBalanceVisibility,
  loadBalanceVisibility
};
