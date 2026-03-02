import { ref, watch, onMounted } from "vue";

export type ThemeMode = "light" | "dark" | "system";

const THEME_KEY = "theme-mode";

const theme = ref<ThemeMode>("system");
const actualTheme = ref<"light" | "dark">("light");

const getSystemTheme = (): "light" | "dark" => {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "light";
};

const applyTheme = (newTheme: "light" | "dark") => {
  actualTheme.value = newTheme;
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", newTheme);
    document.documentElement.setAttribute("data-bs-theme", newTheme);
  }
};

const updateTheme = () => {
  const mode = theme.value;
  if (mode === "system") {
    applyTheme(getSystemTheme());
  } else {
    applyTheme(mode);
  }
};

export function useTheme() {
  onMounted(() => {
    const savedTheme = localStorage.getItem(THEME_KEY) as ThemeMode | null;
    if (savedTheme && ["light", "dark", "system"].includes(savedTheme)) {
      theme.value = savedTheme;
    }
    updateTheme();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", () => {
      if (theme.value === "system") {
        updateTheme();
      }
    });
  });

  watch(theme, (newValue) => {
    localStorage.setItem(THEME_KEY, newValue);
    updateTheme();
  });

  const setTheme = (mode: ThemeMode) => {
    theme.value = mode;
  };

  const cycleTheme = () => {
    const modes: ThemeMode[] = ["system", "light", "dark"];
    const currentIndex = modes.indexOf(theme.value);
    const nextIndex = (currentIndex + 1) % modes.length;
    theme.value = modes[nextIndex];
  };

  return {
    theme,
    actualTheme,
    setTheme,
    cycleTheme,
  };
}
