import { defineUserConfig } from "vuepress";
import theme from "./theme";

const path = require('path');

export default defineUserConfig({
  lang: "zh-CN",
  title: "足各路的小仓库",
  description: "一个收藏了各种奇珍异宝的小仓库",

  base: "/vuepress-blog/",

  // plugins,

  theme,

  alias: {
    "@LinkList": path.resolve(__dirname, "components/LinkList.vue"),
    // 你可以在这里将别名定向到自己的组件
    // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
    // "@theme-hope/components/HomeFeatures": path.resolve(
    //   __dirname,
    //   "./components/HomePage.vue"
    // ),
  },

});
