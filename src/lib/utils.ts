
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
