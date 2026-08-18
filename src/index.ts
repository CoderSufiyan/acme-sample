import { discountPercent, promotionIdForPromotionCode, summarizePromotionCode } from "./billing";
import { cardLabel } from "./cards";
import { Card, Customer, PromotionCode } from "./types";

const customer: Customer = { id: "cus_123", name: "Acme Inc" };

const promo: PromotionCode = {
  id: "promo_abc",
  code: "SAVE20",
  active: true,
  promotion: { id: "promo_xyz", name: "20% off", percent_off: 20 },
  created: 1710000000,
};

const card: Card = {
  id: "card_456",
  brand: "Visa",
  last4: "4242",
  exp_month: 12,
  exp_year: 2027,
};

export function renderBillingSummary(): string[] {
  return [
    customer.name,
    summarizePromotionCode(promo),
    `promotion: ${promotionIdForPromotionCode(promo)}`,
    `discount: ${discountPercent(promo)}%`,
    cardLabel(card),
  ];
}
