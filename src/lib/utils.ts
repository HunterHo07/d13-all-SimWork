import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { User, Task } from '@/types';

/**
 * Combines class names with Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generates a random ID
 */
export function generateId(prefix: string = ''): string {
  return `${prefix}${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Formats a date to a readable string
 */
export function formatDate(date: Date | number): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Formats a number with commas
 */
export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Truncates a string to a specified length
 */
export function truncateString(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

/**
 * Calculates the XP needed for the next level
 */
export function xpForNextLevel(currentLevel: number): number {
  return Math.floor(100 * Math.pow(1.5, currentLevel));
}

/**
 * Calculates the progress percentage to the next level
 */
export function levelProgress(user: User): number {
  const xpNeeded = xpForNextLevel(user.progress.level);
  return Math.min(100, Math.floor((user.progress.xp / xpNeeded) * 100));
}

/**
 * Calculates the score for a task based on metrics
 */
export function calculateTaskScore(
  task: Task,
  metrics: Record<string, number>
): number {
  let totalScore = 0;
  let totalWeight = 0;

  task.evaluation.metrics.forEach((metric) => {
    const score = metrics[metric.name] || 0;
    totalScore += score * metric.weight;
    totalWeight += metric.weight;
  });

  return Math.round((totalScore / totalWeight) * task.evaluation.totalScore);
}

/**
 * Saves user data to localStorage
 */
export function saveUserData(user: User): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('simwork-user', JSON.stringify(user));
  }
}

/**
 * Loads user data from localStorage
 */
export function loadUserData(): User | null {
  if (typeof window !== 'undefined') {
    const userData = localStorage.getItem('simwork-user');
    if (userData) {
      return JSON.parse(userData);
    }
  }
  return null;
}

/**
 * Clears user data from localStorage
 */
export function clearUserData(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('simwork-user');
  }
}

/**
 * Debounce function to limit the rate at which a function can fire
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to limit the rate at which a function can fire
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;

  return function(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
