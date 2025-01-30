import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep({ delay = 1000 }) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
