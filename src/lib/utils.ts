import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sanitizeForId = (label: string) => {
  return label.toLowerCase().replace(/[^\w\s]|(\s+)/g, (_match: string, group1: string) => (group1 ? "-" : ""));
};
