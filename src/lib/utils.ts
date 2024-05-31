import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sanitizeForId = (label: string) => {
  return label.toLowerCase().replace(/[^\w\s]|(\s+)/g, (_match: string, group1: string) => (group1 ? "-" : ""));
};

export function numberWithDots(x: number|undefined) {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const formatDate = (dateString: string) => {
  const [month, year] = dateString.split(", ");
  return `${month } 23, ${year}`;
};

export const valueFormatter = function (number: number) {
  return new Intl.NumberFormat('us').format(number).toString() + 'GB'
};
