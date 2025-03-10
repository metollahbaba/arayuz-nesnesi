
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

// Save current balances to localStorage (browser's storage)
const saveBalances = () => {
  localStorage.setItem('cardBalances', JSON.stringify(currentBalances));
};

// Load balances from localStorage
const loadBalances = () => {
  const saved = localStorage.getItem('cardBalances');
  if (saved) {
    currentBalances = JSON.parse(saved);
  }
  return currentBalances;
};

// Reset balances to original values
const resetBalances = () => {
  currentBalances = { ...originalBalances };
  saveBalances();
  return currentBalances;
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
  
  return [
    {
      bankName: 'Kapital Bank ASC',
      cardNumber: '5113',
      balance: getFormattedBalance('5113'),
      minAmount: 0.01,
      maxAmount: currentBalances['5113']
    },
    {
      bankName: 'Kapital Bank ASC',
      cardNumber: '4444',
      balance: getFormattedBalance('4444'),
      minAmount: 0.01,
      maxAmount: currentBalances['4444']
    },
    {
      bankName: 'Kapital Bank ASC',
      cardNumber: '3303',
      balance: getFormattedBalance('3303'),
      minAmount: 0.01,
      maxAmount: currentBalances['3303']
    }
  ];
};

export {
  loadBalances,
  resetBalances,
  updateCardBalance,
  getFormattedBalance,
  getCardsWithBalances
};
