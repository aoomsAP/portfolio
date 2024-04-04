import React, { useEffect, useState } from "react";
import { Dictionary, Lexicon } from "../types";
import en from "../assets/languages/en.json";
import nl from "../assets/languages/nl.json";

export interface SiteSettingsContext {
    // language settings:
    language: string,
    lexicon: Lexicon,
    setLanguage: (language: string) => void;

    // theme settings:
    theme: string,
    setTheme: (theme: string) => void;
}

export const SiteSettingsContext = React.createContext<SiteSettingsContext>({
    // language settings:
    language: "",
    lexicon: {},
    setLanguage: () => { },

    // theme settings:
    theme: "",
    setTheme: () => { }
});

export const SiteSettingsProvider = ({ children }: { children: React.ReactNode }) => {
    // user system theme preference
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    // states
    const [theme, setTheme] = useState<string>(localStorage.getItem("theme") ?? (prefersLight ? "light" : "dark"));
    const [language, setLanguage] = useState<string>(localStorage.getItem("language") ?? "en");

    // dictionary containing the lexicon for each available language
    const dictionary: Dictionary = { en, nl }

    // whenever theme is changed
    useEffect(() => {
        // add or remove dark-mode/light-mode class for the entire body of the website
        if (theme === "light") {
            document.documentElement.classList.remove("dark-mode");
            document.documentElement.classList.add("light-mode");
        } else {
            document.documentElement.classList.remove("light-mode");
            document.documentElement.classList.add("dark-mode");
        }

        // store theme choice in localStorage
        localStorage.setItem("theme", theme);
    }, [theme])

    // whenever language is changed
    useEffect(() => {
        // store language choice in localStorage
        localStorage.setItem("language", language);
    }, [language])

    return (
        <SiteSettingsContext.Provider value={{
            // language settings:
            language: language,
            lexicon: dictionary[language],
            setLanguage: setLanguage,

            // theme settings:
            theme: theme,
            setTheme: setTheme,
        }}>
            {children}
        </SiteSettingsContext.Provider>
    )
}