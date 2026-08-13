import { Card } from "./types";

// Build a display label for a card.
export function cardLabel(card: Card): string {
  return `${card.brand} •••• ${card.last4}`;
}
