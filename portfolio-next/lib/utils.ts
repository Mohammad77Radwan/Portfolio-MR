import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and tailwind-merge
 * This ensures Tailwind CSS classes are properly merged without conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a date string to a localized format
 */
export function formatDate(date: string | Date, locale = "fr-FR"): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Format a date range for experiences/education
 */
export function formatDateRange(
  startDate: string,
  endDate: string,
  locale = "fr-FR"
): string {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  const formatOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };
  
  return `${start.toLocaleDateString(locale, formatOptions)} - ${end.toLocaleDateString(locale, formatOptions)}`;
}

/**
 * Truncate text to a specified length with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => func(...args), wait);
  };
}

/**
 * Generate a unique ID for elements
 */
export function generateId(prefix = "id"): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 11)}`;
}

/**
 * Check if we're running on the client side
 */
export function isClient(): boolean {
  return typeof window !== "undefined";
}

/**
 * Safely access localStorage with fallback
 */
export function safeLocalStorage<T>(
  key: string,
  defaultValue: T
): {
  get: () => T;
  set: (value: T) => void;
  remove: () => void;
} {
  return {
    get: () => {
      if (!isClient()) return defaultValue;
      try {
        const item = localStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : defaultValue;
      } catch {
        return defaultValue;
      }
    },
    set: (value: T) => {
      if (!isClient()) return;
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch {
        // Storage quota exceeded or other error
      }
    },
    remove: () => {
      if (!isClient()) return;
      try {
        localStorage.removeItem(key);
      } catch {
        // Error removing item
      }
    },
  };
}

/**
 * Sleep utility for async operations
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Check if a value is defined and not null
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}
