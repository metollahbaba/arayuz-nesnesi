
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
 * Format name with first name and first letter of last name followed by asterisks
 */
export function formatUserName(input: string): string {
  if (!input || input.trim() === '') return '';
  
  const formattedInput = input.trim().toUpperCase();
  const parts = formattedInput.split(' ');
  
  if (parts.length === 1) {
    // Only first name provided
    return `${parts[0]} ${'*'.repeat(5)}`;
  } else {
    // First name and last name provided
    const firstName = parts[0];
    const lastName = parts.slice(1).join(' ');
    const firstLetterOfLastName = lastName.charAt(0);
    
    return `${firstName} ${firstLetterOfLastName}${'*'.repeat(5)}`;
  }
}
