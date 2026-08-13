import { PromotionCode } from "./types";

// Returns the promotion id a customer's promotion code maps to.
// OLD: promotion codes exposed a `coupon` field. Stripe renamed it to `promotion`.
export function promotionIdForPromotionCode(code: PromotionCode): string {
  return code.coupon.id;
}

// Summarize a promotion code for display.
export function summarizePromotionCode(code: PromotionCode): string {
  const promotion = code.coupon;
  return `${code.code} → ${promotion.name} (${promotion.percent_off}% off)`;
}

// Find the discount percent for a customer's active promotion.
export function discountPercent(code: PromotionCode): number {
  return code.coupon.percent_off;
}
