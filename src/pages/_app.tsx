import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";

function DirectionWrapper({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const dir = language === "ar" || language === "he" ? "rtl" : "ltr";
  return (
    <div dir={dir} style={{ direction: dir }}>
      {children}
    </div>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider>
        <DirectionWrapper>
          <Component {...pageProps} />
        </DirectionWrapper>
      </LanguageProvider>
    </ThemeProvider>
  );
}
