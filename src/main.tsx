import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IntlProvider } from "react-intl";
import AppRouter from "./router";
import { defaultLocale, messages } from "./i18n";
import "./assets/styles/index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <IntlProvider locale={defaultLocale} messages={messages[defaultLocale]}>
            <AppRouter />
        </IntlProvider>
    </StrictMode>
);
