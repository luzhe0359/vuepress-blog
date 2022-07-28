import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "足各路的小仓库",
  description: "一个收藏了各种奇珍异宝的小仓库",

  base: "/vuepress-blog/",

  theme,
});
