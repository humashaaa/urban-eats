import clsx from "clsx"; // Import clsx without curly braces
import { twMerge } from "tailwind-merge"; // Import twMerge from tailwind-merge

export function cn(...inputs) {
  return twMerge(clsx(...inputs)); // Spread the inputs to pass correctly to clsx
}
