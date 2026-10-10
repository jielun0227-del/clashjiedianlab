# 极客网络实验室

基于 Hugo 的中文技术博客，聚焦跨境网络工具、客户端配置、节点测评和故障排查。

## 本地预览

安装 Hugo Extended 之后，在项目根目录执行：

```bash
hugo server -D
```

然后打开 `http://localhost:1313/`。

如果已经存在 `public/` 构建结果，也可以双击 `start-preview.bat`，通过本地 HTTP 预览。不要直接双击 `public/index.html`，因为浏览器的 `file://` 模式会把以 `/` 开头的 CSS 路径解析到磁盘根目录，导致页面看起来像“没有样式”。

项目内置了 `layouts/` 和 `assets/css/site.css`，即使尚未下载 PaperMod 主题也能预览当前界面。生产环境建议将 `themes/PaperMod` 替换为官方 PaperMod 版本，并保留项目布局作为定制覆盖层。

## 内容约定

- `articles/`：协议、分流和网络机制科普
- `docs/`：Clash、Shadowrocket、Sing-box 配置教程
- `recommend/`：选购方法与推荐榜单
- `faq/`：订阅、节点和客户端故障排查
- `reviews/`：测速、丢包和流媒体解锁记录

发布文章前请补充实际测试时间、网络环境与数据来源，不要将待实测字段写成确定性营销结论。
