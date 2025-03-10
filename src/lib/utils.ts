
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format card number into groups of 4 digits
 */
export function formatCardNumber(value: string): string {
  const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
  const onlyNumbers = value.replace(/[^\d]/g, '');
  
  return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
    [$1, $2, $3, $4].filter(group => group !== '').join(' ')
  );
}

/**
 * Determine card type based on first digit
 */
export function getCardType(cardNumber: string): string {
  if (!cardNumber) return '';
  
  // Remove all non-digit characters
  const firstDigit = cardNumber.replace(/\D/g, '')[0];
  
  if (firstDigit === '4') {
    return 'Visa';
  } else if (firstDigit === '5') {
    return 'Mastercard';
  } else {
    return 'Card';
  }
}

/**
 * Format name with first 2 letters followed by 5 asterisks for names up to 3 letters
 * If only one letter is entered, it will be followed by 5 asterisks
 */
export function formatUserName(input: string): string {
  if (!input || input.trim() === '') return '';
  
  const formattedInput = input.trim().toUpperCase();
  
  if (formattedInput.length === 1) {
    // Only one letter provided
    return `${formattedInput}${'*'.repeat(5)}`;
  } else if (formattedInput.length === 2) {
    // Two letters provided
    return `${formattedInput}${'*'.repeat(5)}`;
  } else {
    // Three or more letters provided (we'll only use the first 3)
    const firstTwoLetters = formattedInput.substring(0, 2);
    const thirdLetter = formattedInput.charAt(2);
    
    return `${firstTwoLetters}${'*'.repeat(5)} ${thirdLetter}${'*'.repeat(4)}`;
  }
}
