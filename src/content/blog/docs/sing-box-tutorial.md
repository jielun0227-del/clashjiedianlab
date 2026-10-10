---
title: "Sing-box 入门教程：JSON 配置、路由规则与安全检查"
date: 2026-10-08
lastmod: 2026-10-08
description: "Sing-box 基础教程，介绍 JSON 配置结构、路由规则、DNS 和日志排错方法。"
categories: ["客户端教程"]
tags: ["Sing-box", "JSON", "路由规则"]
keywords: ["Sing-box 教程", "Sing-box 配置", "代理路由"]
draft: false
---

## 配置结构

Sing-box 配置通常分为 `inbounds`、`outbounds`、`route` 和 `dns`。修改前保留原文件备份，并使用客户端内置校验功能检查 JSON 语法。

```json
{
  "log": { "level": "info" },
  "route": { "auto_detect_interface": true }
}
```

不要把访问令牌、订阅 URL 或私钥提交到公开仓库。出现连接异常时，先查看日志中的 DNS、TLS 和路由决策，再逐项缩小范围。
