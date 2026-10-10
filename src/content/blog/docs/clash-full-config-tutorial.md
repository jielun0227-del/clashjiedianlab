---
title: "Clash / Clash Verge 进阶配置教程：Sub-Store 订阅整合与自定义分流"
date: 2026-10-09
description: "Clash 与 Clash Verge Rev 高操教程：使用 Sub-Store 聚合多机场订阅、自定义 Merge 规则与预设置文件。"
categories: ["教程知识库"]
tags: ["Clash配置教程", "Sub-Store", "分流规则"]
draft: false
---

随着手头持有的机场订阅越来越多，如何在 Clash 客户端中将多家机场的节点进行统一去重、节点重命名、自动筛选故障节点并叠加自定义分流规则？**Clash / Clash Verge Rev** 的进阶配置能帮你实现这一目标。

## 一、 使用 Sub-Store 实现多机场订阅聚合

Sub-Store 是强大的开源订阅管理工具，支持多订阅合并、节点正则过滤以及标志注入，自动剔除高倍率或故障节点。

## 二、 Clash Verge Rev 自定义 Merge 规则配置

在 Clash Verge Rev 中，可以通过预处理 (Script / Merge) 优雅地插入自定义规则：

```yaml
prepend-rules:
  - DOMAIN-SUFFIX,work-internal.com,公司节点
  - DOMAIN-KEYWORD,openai,ChatGPT专用
  - GEOIP,telegram,TG代理组,no-resolve

prepend-proxy-groups:
  - name: ChatGPT专用
    type: select
    proxies:
      - 快狸-香港IPLC
      - 边缘节点-美西
      - DIRECT
```

通过预处理配置，可以打造出完全个性化、自动化故障转移的高可用网络调度系统。
