import enMessages from "./en";

type MessageDictionary = Record<string, string>;

export const messages = {
    en: enMessages
} as const satisfies Record<string, MessageDictionary>;

export type AppLocale = keyof typeof messages;

export const defaultLocale: AppLocale = "en";
