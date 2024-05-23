import { defineConfig } from "vuepress/config";
import navbar from "./navbar";
import sidebar from "./sidebar";

const domain = "https://github.com/k102817923/blog";

export default defineConfig({
  title: "knan的编程宝典",
  description: "贴心的编程学习路线，全面的编程知识百科",
  head: [
    // 站点图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  // 文章的永久链接格式
  permalink: "/:slug",
  // 监听文件变化, 热更新
  extraWatchFiles: [".vuepress/*.ts"],
  markdown: {
    // 开启代码块的行号
    lineNumbers: true,
    // 支持4级以上的标题渲染
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"],
  },
  // @ts-ignore
  plugins: [
    ["@vuepress/back-to-top"],
    ["@vuepress/medium-zoom"],
    // https://github.com/ekoeryanto/vuepress-plugin-sitemap
    [
      "sitemap",
      {
        hostname: domain,
      },
    ],
    // https://github.com/IOriens/vuepress-plugin-baidu-autopush
    ["vuepress-plugin-baidu-autopush"],
    // https://github.com/zq99299/vuepress-plugin/tree/master/vuepress-plugin-tags
    ["vuepress-plugin-tags"],
    // https://github.com/znicholasbrown/vuepress-plugin-code-copy
    [
      "vuepress-plugin-code-copy",
      {
        successText: "代码已复制",
      },
    ],
    // https://github.com/webmasterish/vuepress-plugin-feed
    [
      "feed",
      {
        canonical_base: domain,
        count: 10000,
        // 需要自动推送的文档目录
        posts_directories: [],
      },
    ],
    // https://github.com/tolking/vuepress-plugin-img-lazy
    ["img-lazy"],
  ],
  // 主题配置
  themeConfig: {
    logo: "/logo.png",
    // 导航栏配置
    nav: navbar,
    // 侧边栏配置
    sidebar,
    // 文章的最近更新时间显示格式
    lastUpdated: "最近更新",
    // 网站对应的 GitHub 仓库位置
    repo: "k102817923/blog",
    // 仓库的文档分支
    docsBranch: "main",
  },
});
