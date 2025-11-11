import { memo, useMemo } from "react";
import { MoonStar, Palette, SunMedium } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";

const ICON_MAP = {
  light: SunMedium,
  dark: MoonStar,
  modern: Palette,
};

const LABEL_MAP = {
  light: "Switch to dark theme",
  dark: "Switch to modern theme",
  modern: "Switch to light theme",
};

function ThemeToggleComponent({ className = "" }) {
  const { theme, toggleTheme } = useTheme();

  const Icon = useMemo(() => ICON_MAP[theme] ?? SunMedium, [theme]);
  const nextLabel = useMemo(() => LABEL_MAP[theme] ?? LABEL_MAP.light, [theme]);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative flex items-center gap-2 rounded-full border border-transparent bg-linear-to-r from-yellow-500/20 via-yellow-500/10 to-transparent px-3 py-2 text-sm font-semibold text-yellow-700 shadow-sm backdrop-blur-md transition hover:from-yellow-500/40 hover:text-yellow-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 ${className}`}
      aria-label={nextLabel}
      title={nextLabel}
    >
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/90 shadow-inner">
        <Icon size={16} className="text-yellow-600" />
      </span>
      <span className="capitalize text-xs tracking-wide text-yellow-700">
        {theme}
      </span>
    </button>
  );
}

const ThemeToggle = memo(ThemeToggleComponent);

export default ThemeToggle;


