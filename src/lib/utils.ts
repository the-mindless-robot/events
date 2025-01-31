import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(delay = 1000) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
