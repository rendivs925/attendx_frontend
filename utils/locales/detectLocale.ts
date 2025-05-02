import { Locale } from "@/types";

const supportedLocales: Locale[] = ["en", "id", "de"];

export function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";

  const browserLang = navigator.language.split("-")[0] as Locale;
  return supportedLocales.includes(browserLang) ? browserLang : "en";
}
