import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "首页", link: "/" },
  { text: "文章", link: "/article" },
  {
    text: "收藏",
    prefix: "/posts/",
    children: [
      {
        text: "收藏 链接",
        prefix: "collection/",
        children: ["article9"],
      },
    ],
  },
  {
    text: "博客",
    link: "https://www.zugelu.com",
  },
]);
