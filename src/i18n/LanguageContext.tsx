import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dict, type Lang, type Dict } from "./dict";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void; t: Dict };
const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "en" || saved === "es") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", l);
      document.documentElement.lang = l;
    }
  };

  const toggle = () => setLang(lang === "en" ? "es" : "en");

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t: dict[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}