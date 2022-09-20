import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "技术文档",
    icon: "edit",
    prefix: "/articles/",
    children: [
      { text: "文章链接", prefix: "", icon: "edit", link: "technical/" },
    ],
  },
  { text: "使用指南", icon: "creative", link: "/guide/" },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
