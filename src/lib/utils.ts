import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateStringsEqual = (oldString: string, newString: string) => {
  return oldString.trim().toLowerCase() === newString.trim().toLowerCase();
};

