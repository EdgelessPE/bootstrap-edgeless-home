const fs = require("fs");
const path = require("path");

const CONFIG = {
  srcDir: path.join(__dirname, "..", "src"),
  tokensFile: path.join(__dirname, "..", "src", "styles", "tokens.less"),
  extensions: [".vue", ".astro", ".less"],
};

const TOKEN_CATEGORIES = {
  "基础色彩": [
    { name: "primary-color", value: "#2563eb" },
    { name: "primary-dark", value: "#1d4ed8" },
    { name: "primary-light", value: "#3b82f6" },
    { name: "primary-lighter", value: "#60a5fa" },
    { name: "secondary-color", value: "#64748b" },
    { name: "brand-blue", value: "#2f5696" },
    { name: "bg-light", value: "#f8fafc" },
    { name: "bg-lighter", value: "#f1f5f9" },
    { name: "bg-white", value: "#ffffff" },
    { name: "text-primary", value: "#1e293b" },
    { name: "text-secondary", value: "#64748b" },
    { name: "text-muted", value: "#94a3b8" },
    { name: "text-body", value: "#475569" },
    { name: "text-hint", value: "#505356" },
    { name: "border-color", value: "#e2e8f0" },
    { name: "border-light", value: "#cbd5e1" },
    { name: "navbar-bg", value: "#1c2331" },
    { name: "bg-dark-start", value: "#1e293b" },
    { name: "bg-dark-end", value: "#0f172a" },
    { name: "white", value: "white" },
  ],
  "强调色": [
    { name: "accent-yellow", value: "#92400e" },
    { name: "accent-red", value: "#b91c1c" },
    { name: "warning-red", value: "#ef4444" },
    { name: "warning-red-light", value: "#f87171" },
    { name: "warning-bg-light", value: "#fecaca" },
  ],
  "功能色": [
    { name: "color-cyan", value: "#00bcd4" },
    { name: "color-red", value: "#F44336" },
    { name: "color-green", value: "#4caf50" },
    { name: "color-orange", value: "#ff9800" },
    { name: "color-indigo", value: "#3F51B5" },
    { name: "color-purple", value: "#9c27b0" },
    { name: "color-light-blue", value: "#03A9F4" },
    { name: "color-teal", value: "#009688" },
    { name: "color-yellow", value: "#ffeb3b" },
  ],
  "阴影": [
    { name: "shadow-sm", value: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
    { name: "shadow-md", value: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" },
    { name: "shadow-lg", value: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" },
    { name: "shadow-xl", value: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" },
  ],
  "其他": [
    { name: "radius-sm", value: "0.375rem" },
    { name: "radius-md", value: "0.5rem" },
    { name: "radius-lg", value: "0.75rem" },
    { name: "radius-xl", value: "1rem" },
    { name: "transition", value: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" },
  ],
  "透明度": [
    { name: "white-9", value: "rgba(255, 255, 255, 0.9)" },
    { name: "white-8", value: "rgba(255, 255, 255, 0.8)" },
    { name: "white-7", value: "rgba(255, 255, 255, 0.7)" },
    { name: "white-6", value: "rgba(255, 255, 255, 0.6)" },
    { name: "white-5", value: "rgba(255, 255, 255, 0.5)" },
    { name: "white-4", value: "rgba(255, 255, 255, 0.4)" },
    { name: "white-3", value: "rgba(255, 255, 255, 0.3)" },
    { name: "white-2", value: "rgba(255, 255, 255, 0.2)" },
    { name: "white-1", value: "rgba(255, 255, 255, 0.1)" },
    { name: "white-08", value: "rgba(255, 255, 255, 0.08)" },
    { name: "black-6", value: "rgba(0, 0, 0, 0.6)" },
    { name: "black-5", value: "rgba(0, 0, 0, 0.5)" },
    { name: "black-4", value: "rgba(0, 0, 0, 0.4)" },
    { name: "black-3", value: "rgba(0, 0, 0, 0.3)" },
    { name: "black-25", value: "rgba(0, 0, 0, 0.25)" },
    { name: "black-2", value: "rgba(0, 0, 0, 0.2)" },
    { name: "black-15", value: "rgba(0, 0, 0, 0.15)" },
    { name: "black-1", value: "rgba(0, 0, 0, 0.1)" },
    { name: "black-08", value: "rgba(0, 0, 0, 0.08)" },
    { name: "black-06", value: "rgba(0, 0, 0, 0.06)" },
    { name: "black-05", value: "rgba(0, 0, 0, 0.05)" },
    { name: "navbar-bg-95", value: "rgba(28, 35, 49, 0.95)" },
    { name: "navbar-bg-98", value: "rgba(28, 35, 49, 0.98)" },
    { name: "primary-1", value: "rgba(37, 99, 235, 0.1)" },
    { name: "primary-3", value: "rgba(37, 99, 235, 0.3)" },
    { name: "primary-4", value: "rgba(37, 99, 235, 0.4)" },
    { name: "blue-3", value: "rgba(59, 130, 246, 0.3)" },
    { name: "blue-5", value: "rgba(59, 130, 246, 0.5)" },
  ],
};

function getAllFiles(dir, extensions, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {
      getAllFiles(fullPath, extensions, files);
    } else if (extensions.some((ext) => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  return files;
}

function collectColors() {
  const files = getAllFiles(CONFIG.srcDir, CONFIG.extensions);
  const colorMap = new Map();

  const hexRegex = /#([0-9a-fA-F]{3,8})\b/g;
  const rgbaRegex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)/g;

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");

    let match;
    while ((match = hexRegex.exec(content)) !== null) {
      const color = match[0];
      if (!colorMap.has(color)) {
        colorMap.set(color, { count: 0, files: [] });
      }
      colorMap.get(color).count++;
      if (!colorMap.get(color).files.includes(file)) {
        colorMap.get(color).files.push(file);
      }
    }

    while ((match = rgbaRegex.exec(content)) !== null) {
      const color = match[0];
      if (!colorMap.has(color)) {
        colorMap.set(color, { count: 0, files: [] });
      }
      colorMap.get(color).count++;
      if (!colorMap.get(color).files.includes(file)) {
        colorMap.get(color).files.push(file);
      }
    }
  }

  return colorMap;
}

function generateTokensFile(colorMap) {
  const allTokens = new Map();

  Object.entries(TOKEN_CATEGORIES).forEach(([category, tokens]) => {
    tokens.forEach((t) => allTokens.set(t.value.toLowerCase(), { name: t.name, value: t.value, category }));
  });

  colorMap.forEach((info, color) => {
    const lowerColor = color.toLowerCase();
    if (!allTokens.has(lowerColor)) {
      if (color.startsWith("#")) {
        const suggestedName = suggestTokenName(color);
        allTokens.set(lowerColor, { name: suggestedName, value: color, category: "自动识别" });
      }
    }
  });

  let content = ":root {\n";

  const categoryOrder = ["基础色彩", "强调色", "功能色", "阴影", "其他", "自动识别"];

  for (const category of categoryOrder) {
    const tokensInCategory = [...allTokens.entries()]
      .filter(([, v]) => v.category === category)
      .sort((a, b) => a[1].name.localeCompare(b[1].name));

    if (tokensInCategory.length > 0) {
      content += `\n  /* ${category} */\n`;
      tokensInCategory.forEach(([, { name, value }]) => {
        content += `  --${name}: ${value};\n`;
      });
    }
  }

  content += "}\n";
  fs.writeFileSync(CONFIG.tokensFile, content);
  console.log(`✓ 已生成 tokens.less`);

  return allTokens;
}

function suggestTokenName(color) {
  const hex = color.replace("#", "");
  return `custom-${hex.toLowerCase()}`;
}

function buildTokenMap(tokenData) {
  const map = {};
  for (const [value, data] of tokenData) {
    map[value.toLowerCase()] = data.name;
    map[data.value] = data.name;
  }
  return map;
}

function isAlreadyVariable(content, color, tokenName) {
  return content.includes(`var(--${tokenName})`) || content.includes(`--${tokenName}:`);
}

function isInsideBracket(content, matchIndex) {
  let bracketDepth = 0;
  for (let i = matchIndex - 1; i >= 0; i--) {
    if (content[i] === "]") bracketDepth++;
    if (content[i] === "[") {
      if (bracketDepth > 0) {
        bracketDepth--;
      } else {
        return true;
      }
    }
    if (i < matchIndex - 100) break;
  }
  return false;
}

function replaceInFile(filePath, tokenMap) {
  let content = fs.readFileSync(filePath, "utf-8");
  let replaced = false;
  let replacements = [];

  const sortedTokens = Object.entries(tokenMap).sort((a, b) => b[0].length - a[0].length);

  for (const [color, tokenName] of sortedTokens) {
    if (isAlreadyVariable(content, color, tokenName)) continue;

    if (color.startsWith("#")) {
      const escapedColor = color.replace(/[#]/g, "\\$&");
      const regex = new RegExp(escapedColor, "g");
      let match;
      while ((match = regex.exec(content)) !== null) {
        if (isInsideBracket(content, match.index)) continue;
        content = content.replace(match[0], `var(--${tokenName})`);
        if (!replacements.includes(`${color} → var(--${tokenName})`)) {
          replacements.push(`${color} → var(--${tokenName})`);
        }
        replaced = true;
      }
    } else if (color.startsWith("rgb")) {
      const escapedColor = color.replace(/[[\]()]/g, "\\$&");
      const regex = new RegExp(escapedColor, "g");
      let match;
      while ((match = regex.exec(content)) !== null) {
        if (isInsideBracket(content, match.index)) continue;
        content = content.replace(match[0], `var(--${tokenName})`);
        if (!replacements.includes(`${color} → var(--${tokenName})`)) {
          replacements.push(`${color} → var(--${tokenName})`);
        }
        replaced = true;
      }
    }
  }

  if (replaced) {
    fs.writeFileSync(filePath, content);
    console.log(`✓ ${path.relative(CONFIG.srcDir, filePath)}`);
    replacements.forEach((r) => console.log(`    ${r}`));
  }

  return replaced;
}

function main() {
  console.log("🔍 步骤1: 收集颜色...\n");
  const colorMap = collectColors();
  console.log(`   发现 ${colorMap.size} 种颜色\n`);

  console.log("🎨 步骤2: 生成 tokens.less...\n");
  const tokenData = generateTokensFile(colorMap);

  console.log("🔄 步骤3: 替换文件中的硬编码颜色...\n");
  const files = getAllFiles(CONFIG.srcDir, CONFIG.extensions);
  const tokenMap = buildTokenMap(tokenData);

  let replacedCount = 0;
  for (const file of files) {
    if (file.includes("tokens.less")) continue;
    if (replaceInFile(file, tokenMap)) {
      replacedCount++;
    }
  }

  console.log(`\n✅ 完成! 共替换 ${replacedCount} 个文件`);
}

main();