import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Valkyr",
  description: "个人主页",

  base: "/FTQPrivuepress-docs-starter/",

  theme,

  plugins: [
    searchPlugin({
      locales: {
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
});
