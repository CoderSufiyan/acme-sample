// Stripe API types reflecting the NEW API version (2026-07-29.dahlia).
// Stripe renamed `coupon` to `promotion` and removed `iin`.
// The sample code still uses the old fields, so it no longer typechecks.

export interface Promotion {
  id: string;
  name: string;
  percent_off: number;
}

export interface PromotionCode {
  id: string;
  code: string;
  active: boolean;
  // NEW: Stripe renamed `coupon` to `promotion`.
  promotion: Promotion;
  created: number;
}

export interface Card {
  id: string;
  brand: string;
  last4: string;
  exp_month: number;
  exp_year: number;
}

export interface Customer {
  id: string;
  name: string;
}
