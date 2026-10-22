# Astro Starter Kit: Minimal

## 性能优化与部署

首页的 Bootstrap 样式及 Carousel、Collapse 脚本随项目构建，正文使用系统字体。品牌字体与首张轮播图预加载，下方图片使用原生懒加载。纯展示组件只输出 HTML；交互组件保留 Vue hydration。

图标保留 Font Awesome 类名，构建时从已安装的包提取实际使用的 SVG，生成 `src/styles/icons.css`，不加载图标字体。`pnpm dev`、`pnpm build` 会自动生成，也可以运行 `pnpm icons:generate`。新增动态图标时，请在源码中保留完整类名字符串。

Nginx 缓存配置见 [deploy/nginx-cache.conf](deploy/nginx-cache.conf)：在 `http {}` 中 include 此文件，并在本站 `server {}` 中添加 `add_header Cache-Control $edgeless_cache_control;`。移除已有静态资源 location 中冲突的 `expires`、`Cache-Control` 配置；若 location 自行设置了 `add_header`，需要在该 location 同时设置缓存头并保留所需安全响应头。哈希资源缓存一年并标记 immutable，固定文件名的图片与字体缓存一天，HTML 每次校验。配置需由服务器部署流程应用，并先执行 `nginx -t`；仓库构建不会修改线上 Nginx。

```sh
pnpm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
