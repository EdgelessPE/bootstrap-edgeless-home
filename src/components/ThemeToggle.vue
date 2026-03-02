<template>
  <button class="theme-toggle mr-2" @click="cycleTheme" :title="themeTitle" aria-label="切换主题">
    <i :class="themeIcon" class="theme-icon"></i>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTheme, type ThemeMode } from "../composables/useTheme";

const { theme, cycleTheme } = useTheme();

const themeIcon = computed(() => {
  switch (theme.value) {
    case "light":
      return "fas fa-sun";
    case "dark":
      return "fas fa-moon";
    case "system":
      return "fas fa-desktop";
  }
});

const themeTitle = computed(() => {
  switch (theme.value) {
    case "light":
      return "浅色模式";
    case "dark":
      return "深色模式";
    case "system":
      return "跟随系统";
  }
});
</script>

<style scoped>
.theme-toggle {
  background: transparent;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: var(--white-9);
  font-size: 1.1rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.theme-toggle:hover {
  color: var(--white);
  background: var(--white-1);
}

.theme-icon {
  width: 1.1rem;
  text-align: center;
}
</style>
