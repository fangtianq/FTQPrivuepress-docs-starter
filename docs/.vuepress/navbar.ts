import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/home",
  { text: "使用指南", icon: "creative", link: "https://theme-hope.vuejs.press/zh/guide/" },
  {
    text: "加入Q群",
    icon: "group",
    children: [
      // {
      //   text: "tts-vue反馈群①(752801820)-已满",
      //   icon: "group",
      //   link: "https://jq.qq.com/?_wv=1027&k=bMNZfGxs",
      // },
    ],
  },
]);
