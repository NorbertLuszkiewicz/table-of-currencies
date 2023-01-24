export interface Currency {
  code?: string;
  currency?: string;
  mid?: number;
}
export interface Rates {
  code: CurrencyCode;
  currency: string;
  mid: number;
}

export interface CurrencyResponse {
  rates: [Rates];
}

export enum CurrencyCode {
  PLN = "PLN",
  USD = "USD",
  EUR = "EUR",
  GBP = "GBP",
}
