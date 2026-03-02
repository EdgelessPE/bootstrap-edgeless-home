# AGENTS.md - EdgelessPE Bootstrap Home

本文档为在此代码库中工作的 AI 代理提供指导。

## 项目概览

- **框架**: Astro 5.x + Vue 3 集成
- **语言**: TypeScript
- **样式**: UnoCSS (utility-first) + LESS + Bootstrap 5 + 自定义 CSS
- **包管理器**: pnpm
- **代码检查**: oxlint (Vue 插件)
- **代码格式化**: oxfmt

## 构建/检查/测试命令

```bash
# 开发
pnpm dev              # 启动 Astro 开发服务器
pnpm build            # 构建生产版本
pnpm preview          # 预览生产版本

# 代码检查
pnpm lint             # 对 src/ 目录运行 oxlint
pnpm lint:fix         # 自动修复代码检查问题

# 代码格式化
pnpm format           # 使用 oxfmt 格式化代码

# 预提交钩子 (通过 simple-git-hooks 自动运行)
# 对暂存的 .vue, .ts, .tsx, .js, .jsx, .astro 文件运行 lint-staged
```

## 代码风格指南

### 通用规范

- **行长度**: 无严格限制，但建议保持合理的行长度以提高可读性
- **分号**: 语句末尾使用分号
- **引号**: 字符串使用双引号 (`"text"`, 而不是 `'text'`)
- **缩进**: 使用 2 个空格

### 文件结构

```
src/
├── components/       # Vue 组件 (.vue 文件)
├── layouts/          # Astro 布局 (.astro 文件)
├── pages/            # Astro 页面 (.astro 文件)
└── styles/           # 全局样式 (.less 文件)
```

### Vue 组件

- 使用 `<script setup lang="ts">` 语法 (Vue 3 Composition API)
- 使用 `<template>` 编写模板
- 使用 `<style scoped>` 编写组件样式（请优先使用 UnoCSS）
- 组件名使用 PascalCase (例如 `Navbar.vue`, `DownloadSection.vue`)

示例组件结构:
```vue
<template>
  <!-- 模板内容 -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// TypeScript 类型和导入
const isScrolled = ref(false);
</script>

<style scoped>
/* 组件特定样式 */
</style>
```

### Astro 文件

- 使用 `---` 编写前置matter 用于导入和 props
- 使用 interface Props 定义类型安全的 props
- 将组件放在 layouts/ 或 pages/ 目录中

示例:
```astro
---
import Layout from '../layouts/Layout.astro';
import Navbar from '../components/Navbar.vue';

interface Props {
  title: string;
}

const { title } = Astro.props;
---

<Layout title={title}>
  <Navbar client:load />
</Layout>
```

### TypeScript

- 启用严格模式 (继承 `astro/tsconfigs/strict`)
- 为 props、refs 和函数参数定义正确的类型
- 在 `.vue` 文件中通过 `<script setup lang="ts">` 使用 TypeScript

### CSS/样式

- **优先使用 UnoCSS 工具类**，只有在 UnoCSS 无法实现的情况下才使用 `<style scoped>`
- **LESS 用于全局样式**：全局变量和样式放在 `src/styles/` 目录
  - `tokens.less` - 设计令牌（颜色、间距、字体、阴影等 CSS 变量）
  - `global.less` - 全局样式（重置、基本样式、通用组件）
- 在 Astro 文件中导入 LESS：`import "../styles/tokens.less";`
- 模板中使用 kebab-case 命名 CSS 类
- 利用 `uno.config.ts` 中的 shortcuts 定义常用样式组合

### 命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| Vue 组件 | PascalCase | `Navbar.vue`, `DownloadSection.vue` |
| Astro 布局 | PascalCase | `Layout.astro` |
| Astro 页面 | kebab-case | `index.astro` |
| 变量/函数 | camelCase | `isScrolled`, `handleScroll` |
| CSS 类 | kebab-case | `navbar-toggler`, `download-btn` |

### 导入

- 按类型分组导入: 先外部库，后内部导入
- Vue composition 函数使用命名导入
- 本地组件使用相对导入

```typescript
// 先外部导入
import { ref, onMounted, onUnmounted } from "vue";

// 然后本地导入 (如有)
import Navbar from '../components/Navbar.vue';
```

### Props 和数据

- 在 Vue 组件中使用 `defineProps` 和 TypeScript 接口
- 使用 `ref()` 处理响应式原始类型
- 使用 `const` 定义常量，仅在必要时使用 `let`

### 生命周期钩子

- 使用 `onMounted` 进行初始化
- 使用 `onUnmounted` 进行清理
- 在 `onUnmounted` 中移除事件监听器以防止内存泄漏

### 错误处理

- 无严格的错误处理模式强制要求
- 适当使用防御性检查
- 使用可选链 (`?.`) 和空值合并 (`??`) 确保安全

### 客户端指令

- 需要立即水合的交互组件使用 `client:load`
- 可视时水合的组件使用 `client:visible`
- 仅适用于 Vue 组件，不适用于 Astro 组件

## 重要配置文件

- `astro.config.mjs` - Astro 配置
- `oxlintrc.json` - 代码检查规则 (警告未使用变量和 console 语句)
- `uno.config.ts` - UnoCSS 配置 (含自定义快捷方式)
- `tsconfig.json` - TypeScript 配置 (严格模式)

## 依赖项

核心依赖:
- `astro` - 静态网站生成器
- `vue` - Vue 3 框架
- `@astrojs/vue` - Astro Vue 集成
- `@unocss/astro` - Astro 的 UnoCSS
- `less` - CSS 预处理器
- `bootstrap` - CSS 框架
- `animate.css` - CSS 动画
- `@fortawesome/fontawesome-free` - 图标

## 备注

- 这是一个 EdgelessPE 的静态营销网站
- 项目目前未配置测试
- 项目使用 simple-git-hooks 进行预提交代码检查
- UI 中使用中文文本 (例如 "下载", "首页", "特性")