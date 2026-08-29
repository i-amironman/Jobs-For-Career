'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { THEMES, DEFAULT_THEME, getTheme, hexToHsl } from '@/lib/themes';

interface ThemeContextValue {
  themeId: string;
  setThemeId: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  themeId: DEFAULT_THEME,
  setThemeId: () => {},
});

function applyTheme(id: string) {
  const theme = getTheme(id);
  const root = document.documentElement;
  root.setAttribute('data-theme', id);
  root.style.setProperty('--primary', hexToHsl(theme.primary));
  root.style.setProperty('--ring', hexToHsl(theme.primary));
  root.style.setProperty('--sidebar-bg', theme.sidebar);
  root.style.setProperty('--accent-bg', theme.accentBg);
  root.style.setProperty('--page-bg', theme.pageBg);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeIdState] = useState(DEFAULT_THEME);

  useEffect(() => {
    const stored = localStorage.getItem('jfc_theme') || DEFAULT_THEME;
    setThemeIdState(stored);
    applyTheme(stored);
  }, []);

  const setThemeId = (id: string) => {
    setThemeIdState(id);
    localStorage.setItem('jfc_theme', id);
    applyTheme(id);
  };

  return (
    <ThemeContext.Provider value={{ themeId, setThemeId }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export { THEMES };
