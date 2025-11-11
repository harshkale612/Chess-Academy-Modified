import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext({
  theme: "light",
  themes: ["light", "dark", "modern"],
  setTheme: () => {},
  toggleTheme: () => {},
});

const THEME_STORAGE_KEY = "chess-academy-theme";
const SUPPORTED_THEMES = ["light", "dark", "modern"];

function normalizeThemeName(themeName) {
  if (themeName === "royal") {
    return "modern";
  }
  return themeName;
}

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  try {
    const stored = normalizeThemeName(
      window.localStorage.getItem(THEME_STORAGE_KEY)
    );
    if (stored && SUPPORTED_THEMES.includes(stored)) {
      return stored;
    }
  } catch (error) {
    console.warn("Unable to read stored theme:", error);
  }

  return "light";
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme);

  const applyTheme = useCallback((nextTheme) => {
    const root = document.documentElement;
    root.setAttribute("data-theme", nextTheme);
    root.dataset.theme = nextTheme;
  }, []);

  useEffect(() => {
    applyTheme(theme);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
      console.warn("Unable to persist theme:", error);
    }
  }, [theme, applyTheme]);

  const setTheme = useCallback((nextTheme) => {
    const normalizedNext = normalizeThemeName(nextTheme);
    setThemeState((current) => {
      if (SUPPORTED_THEMES.includes(normalizedNext)) {
        return normalizedNext;
      }
      return current;
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const currentIndex = SUPPORTED_THEMES.indexOf(current);
      const nextIndex = (currentIndex + 1) % SUPPORTED_THEMES.length;
      return SUPPORTED_THEMES[nextIndex];
    });
  }, []);

  const value = useMemo(
    () => ({ theme, themes: SUPPORTED_THEMES, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}


