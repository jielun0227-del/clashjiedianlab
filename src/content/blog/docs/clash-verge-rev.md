---
title: "Clash Verge Rev 配置教程：订阅导入、规则分流与 TUN 模式"
slug: "clash-verge-setup"
section: "docs"
aliases:
  - "/clash-verge-rev-jiaocheng/"
  - "/docs/clash-verge-rev/"
date: 2026-10-08
lastmod: 2026-10-08
description: "Clash Verge Rev Windows/macOS 配置教程，覆盖官方下载、订阅导入、规则组、TUN 模式和常见报错排查。"
categories: ["客户端教程"]
tags: ["Clash Verge Rev", "TUN模式", "订阅配置", "节点配置"]
keywords: ["Clash Verge Rev 教程", "Clash TUN", "Clash 订阅导入"]
draft: false
featured: true
---

> **适用范围**：本文面向 Windows 10/11 和 macOS 用户。请只从项目 Release 页面获取安装包，并核对发布来源。

需要比较订阅线路时，可回到[2026 年度最佳专线机场综合横评](/recommend/best-dedicated-airports-review-2026/)，查看统一的晚高峰测试标准。

## 1. 安装与权限

安装后启动客户端，在系统代理提示出现时允许其创建本地代理端口。若启用 TUN，需按系统提示授予网络扩展或管理员权限。

## 2. 导入订阅

1. 打开 **订阅** 页面并粘贴订阅地址。
2. 点击更新，确认配置文件能显示节点数量和更新时间。
3. 在 **代理** 页面选择策略组，再打开系统代理。

> **推荐节点**：如果订阅更新超时或晚高峰丢包明显，可以试用 **[{{快狸}}]({{https://aolaiyun01.kuailiaff.com/#/?code=OYKzjZdm}})**，将订阅链接导入同一个客户端后，用延迟和实际访问结果对比。优惠码：`{{kl888}}`。

## 3. TUN 模式与分流

TUN 适合需要接管非浏览器流量的应用。启用前先确认 DNS 设置和绕过局域网规则，避免影响打印机、NAS 或公司内网。

```yaml
dns:
  enable: true
  enhanced-mode: fake-ip
mode: rule
```

## 常见排错

- 订阅为空：检查链接是否过期，并确认客户端可访问订阅域名。
- 浏览器能用、桌面应用不能用：确认是否需要 TUN，或为应用设置系统代理。
- 国内站点变慢：检查规则集是否将国内域名错误送入代理。
