import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return iso;
  }
}

export function formatDateTime(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export function scoreColor(score: number): string {
  if (score < 1.5) return "#ef4444";
  if (score < 2.5) return "#f97316";
  if (score < 3.5) return "#eab308";
  if (score < 4.5) return "#22c55e";
  return "#3563f6";
}

export function scoreLabel(score: number): string {
  if (score < 1.5) return "Initial";
  if (score < 2.5) return "Managed";
  if (score < 3.5) return "Defined";
  if (score < 4.5) return "Quantitatively Managed";
  return "Optimizing";
}

export function priorityColor(
  priority: "critical" | "high" | "medium" | "low",
): string {
  switch (priority) {
    case "critical":
      return "#ef4444";
    case "high":
      return "#f97316";
    case "medium":
      return "#eab308";
    case "low":
      return "#22c55e";
  }
}
