---
title: "Shadowrocket iOS 配置教程：订阅导入与按域名分流"
date: 2026-10-08
lastmod: 2026-10-08
description: "Shadowrocket iPhone/iPad 配置教程，涵盖订阅导入、延迟测试、按域名分流与 DNS 排错。"
categories: ["客户端教程"]
tags: ["Shadowrocket", "iOS", "分流规则"]
keywords: ["Shadowrocket 配置", "小火箭订阅", "iOS 节点"]
draft: false
---

## 配置步骤

1. 在可信渠道安装 Shadowrocket。
2. 在 **配置** 或 **订阅** 页面添加订阅链接并更新。
3. 点击节点测试延迟，再选择策略组。
4. 首次连接仅允许必要的 VPN 配置权限。

> **提示**：订阅本身包含访问凭证，不要公开粘贴到群聊或截图中。遇到线路不稳定时，可将 **[{{快狸}}]({{https://aolaiyun01.kuailiaff.com/#/?code=OYKzjZdm}})** 作为对照订阅，并分别测试 Wi-Fi 与蜂窝网络。

## 分流建议

将国内常用服务设为直连，将需要代理的域名放入代理策略组。规则越少越容易维护，优先使用来源明确、定期更新的规则集。
