import { en } from "./en";
import { id } from "./id";
import { de } from "./de";
import { Locale, MessageKey } from "@/types";

export const messages: Record<Locale, Record<MessageKey, string>> = {
  en,
  id,
  de,
};
