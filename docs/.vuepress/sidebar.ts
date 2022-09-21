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
      {
        text: "C++",
        prefix: "",
        icon: "edit",
        link: "/posts/网址收藏/C++.html",
      },
      {
        text: "最常用",
        prefix: "",
        icon: "edit",
        link: "/posts/网址收藏/最常用.html",
      },
      {
        text: "计算机",
        prefix: "",
        icon: "edit",
        link: "/posts/网址收藏/计算机.html",
      },
      {
        text: "算法",
        prefix: "",
        icon: "edit",
        link: "/posts/网址收藏/algorithm.html",
      },
      {
        text: "数据库",
        prefix: "",
        icon: "edit",
        link: "/posts/网址收藏/database.html",
      },
      {
        text: "英语",
        prefix: "",
        icon: "edit",
        link: "/posts/网址收藏/english.html",
      },
      {
        text: "JavaScript",
        prefix: "",
        icon: "edit",
        link: "/posts/网址收藏/JavaScript.html",
      },
      {
        text: "Linux",
        prefix: "",
        icon: "edit",
        link: "/posts/网址收藏/Linux.html",
      },
      {
        text: "Python",
        prefix: "",
        icon: "edit",
        link: "/posts/网址收藏/python.html",
      },
      {
        text: "工具",
        prefix: "",
        icon: "edit",
        link: "/posts/网址收藏/tools.html",
      },
      {
        text: "网址收藏",
        prefix: "",
        icon: "edit",
        link: "/posts/网址收藏/网址收藏.html",
      },
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
