import React, { createContext, useContext, useState } from "react";

// Define the available languages
const languages = {
  en: "English",
  ar: "Arabic",
  he: "Hebrew",
};

// Create the Language Context
const LanguageContext = createContext({
  language: "en",
  setLanguage: (lang: string) => {},
});

// Language Provider Component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook to use Language Context
export const useLanguage = () => useContext(LanguageContext);

// Export available languages
export { languages };
