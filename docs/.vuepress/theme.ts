import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://github.com/fangtianq",

  author: {
    name: "Valkyr",
    url: "https://github.com/fangtianq",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "fangtianq/FTQPrivuepress-docs-starter",

  repoLabel: "GitHub",

  repoDisplay: true,

  docsBranch: "master",

  docsDir: "docs",

  darkmode: "toggle",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "我心有猛虎，细嗅蔷薇。",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "一个前端开发者",
    intro: "/intro.html",
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: true,
    mdEnhance: {
      codetabs: true,
      presentation: ["highlight", "math", "search", "notes", "zoom"],
    },
    comment: {
      provider: "Giscus", // Artalk | Giscus | Waline | Twikoo
      repo: "fangtianq/FTQPrivuepress-docs-starter",
      repoId: "R_kgDOJ_x0vg",
      category: "General",
      categoryId: "DIC_kwDOJ_x0vs4CYSvf",
    }
  },
});
