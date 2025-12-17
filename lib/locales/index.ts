import en from "./en.json";
import ko from "./ko.json";

export type Locale = typeof en;

export const locales = {
  en,
  ko,
} as const;

export type Language = keyof typeof locales;
