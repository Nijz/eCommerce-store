import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatePrice(
  price: number|string,
  options: {
    currency?: "USD" | "EUR" | "GBP" | "BDT" | "INR",
    notation?: Intl.NumberFormatOptions["notation"],
  } = {}
) {
  const { currency = "INR", notation = "compact" } = options
  const numPrice = typeof price === "string" ? parseFloat(price) : price

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numPrice)
}