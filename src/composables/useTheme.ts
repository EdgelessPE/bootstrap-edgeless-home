import { ref, watch, onMounted } from "vue";

export type ThemeMode = "light" | "dark";

const theme = ref<ThemeMode>("light");
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
  applyTheme(theme.value);
};

export function useTheme() {
  onMounted(() => {
    const systemTheme = getSystemTheme();
    theme.value = systemTheme;
    updateTheme();
  });

  watch(theme, () => {
    updateTheme();
  });

  const cycleTheme = () => {
    const modes: ThemeMode[] = ["light", "dark"];
    const currentIndex = modes.indexOf(theme.value);
    const nextIndex = (currentIndex + 1) % modes.length;
    theme.value = modes[nextIndex];
  };

  return {
    theme,
    actualTheme,
    cycleTheme,
  };
}
