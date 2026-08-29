export interface ThemePalette {
  id: string;
  name: string;
  primary: string;
  primaryForeground: string;
  accent: string;
  accentBg: string;
  sidebar: string;
  pageBg: string;
}

export const THEMES: ThemePalette[] = [
  { id: 'sunset-orange', name: 'Sunset Orange', primary: '#FF6F00', primaryForeground: '#FFFFFF', accent: '#FFF3E0', accentBg: '#eef2f8', sidebar: '#ffffff', pageBg: '#f4f7fb' },
  { id: 'coral-flame', name: 'Coral Flame', primary: '#FF5722', primaryForeground: '#FFFFFF', accent: '#FFEBEE', accentBg: '#fceee9', sidebar: '#ffffff', pageBg: '#fdf5f4' },
  { id: 'amber-glow', name: 'Amber Glow', primary: '#FF8F00', primaryForeground: '#FFFFFF', accent: '#FFF8E1', accentBg: '#fef6e4', sidebar: '#ffffff', pageBg: '#fffbf0' },
  { id: 'tangerine-burst', name: 'Tangerine Burst', primary: '#F4511E', primaryForeground: '#FFFFFF', accent: '#FBE9E7', accentBg: '#fceee9', sidebar: '#ffffff', pageBg: '#fff8f6' },
  { id: 'teal-career', name: 'Teal Career', primary: '#00897B', primaryForeground: '#FFFFFF', accent: '#E0F2F1', accentBg: '#e6f5f3', sidebar: '#ffffff', pageBg: '#f0faf9' },
  { id: 'indigo-pro', name: 'Indigo Pro', primary: '#3949AB', primaryForeground: '#FFFFFF', accent: '#E8EAF6', accentBg: '#eceef8', sidebar: '#ffffff', pageBg: '#f5f6fd' },
];

export const DEFAULT_THEME = 'sunset-orange';

export function getTheme(id: string): ThemePalette {
  return THEMES.find((t) => t.id === id) ?? THEMES[0];
}

export function hexToHsl(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}
