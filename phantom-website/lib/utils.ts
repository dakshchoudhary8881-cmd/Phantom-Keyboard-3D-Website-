/**
 * Utility function to format currency
 */
export const formatCurrency = (price: string): string => {
  return price;
};

/**
 * Utility function to calculate scroll progress
 */
export const calculateScrollProgress = (): number => {
  if (typeof window === 'undefined') return 0;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  return scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
};

/**
 * Utility function to ease scroll animations
 */
export const easeOutQuad = (t: number): number => {
  return t * (2 - t);
};

/**
 * Utility function to ease in-out cubic
 */
export const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

/**
 * Debounce function
 */
export const debounce = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Throttle function
 */
export const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return (...args: any[]) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
