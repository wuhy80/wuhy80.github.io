import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/",
  {
    text: "技术文档",
    icon: "edit",
    prefix: "/articles/",
    children: [
      { text: "文章链接", prefix: "", icon: "edit", link: "technical/" },
      // { text: "文章 2", icon: "edit", link: "article2" },
    ],
  },
  /* {
    text: "文章",
    icon: "note",
    prefix: "/posts/",
    children: [
      {
        text: "文章 1-4",
        icon: "note",
        collapsable: true,
        prefix: "article/",
        children: ["article1", "article2", "article3", "article4"],
      },
      {
        text: "文章 5-12",
        icon: "note",
        children: [
          {
            text: "文章 5-8",
            icon: "note",
            collapsable: true,
            prefix: "article/",
            children: ["article5", "article6", "article7", "article8"],
          },
        ],
      },
    ],
  }, */
]);
