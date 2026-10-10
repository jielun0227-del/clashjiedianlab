# 极客网络实验室（Astro）

本站已从 Hugo 迁移到 Astro，原有 Markdown 文章、Frontmatter 和页面内容均保留。

## 本地运行

在项目根目录执行：

```bash
pnpm install
pnpm dev
```

然后打开 Astro 输出的本地地址。

生产构建：`pnpm build`，结果位于 `dist/`。

Astro 的实际构建入口是 `src/`，原 `content/` 和 Hugo 模板暂时保留作为迁移备份。

## 内容目录

- `src/content/blog/articles/`：文章科普
- `src/content/blog/docs/`：教程知识库
- `src/content/blog/recommend/`：机场推荐
- `src/content/blog/faq/`：故障 FAQ
- `src/content/blog/reviews/`：深度测评

## Cloudflare Pages

| 配置项 | 填写值 |
| --- | --- |
| 框架预设 | `Astro` |
| 构建命令 | `pnpm build` |
| 构建输出目录 | `dist` |
| 根目录 | 留空 |
| 生产分支 | `main` |

如果 Cloudflare 使用 npm，也可以将构建命令改为 `npm run build`。迁移后不再需要 `HUGO_VERSION` 环境变量。
