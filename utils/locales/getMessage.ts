import { messages } from "@/locales";
import { Locale, MessageKey } from "@/types";
import { detectLocale } from "./detectLocale";

export function getMessage(key: MessageKey, locale?: Locale): string {
  const detectedLocale = locale || detectLocale();
  return messages[detectedLocale]?.[key] || messages["en"][key] || key;
}
