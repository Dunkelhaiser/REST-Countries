import { createContext, useEffect, useMemo, useState } from "react";

type ThemeContextType = {
    theme: string;
    setThemeHandler: () => void;
};

const iThemeContextState = {
    theme: localStorage.getItem("theme") || "light",
    setThemeHandler: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(iThemeContextState);

interface Props {
    children: React.ReactNode;
}

const ThemeContextProvider: React.FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "light" ? "#fafafa" : "#202c37");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const setThemeHandler = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const values = useMemo(
        () => ({
            theme,
            setThemeHandler,
        }),
        [theme]
    );
    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
