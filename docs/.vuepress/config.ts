// import docsearchPlugin from "@vuepress/plugin-docsearch";
import { defineUserConfig } from "vuepress";
import theme from "./theme";
const path = require('path');

export default defineUserConfig({
  lang: "zh-CN",
  title: "足各路的小仓库",
  description: "一个收藏了各种奇珍异宝的小仓库",

  theme,

  alias: {
    "@LinkList": path.resolve(__dirname, "components/LinkList.vue"),
  },

  plugins: [
    // docsearchPlugin({
    //   appId: "3PFOZUMOM7",
    //   apiKey: "15681cb4f54d89f4c8232d2fe33d92f8",
    //   indexName: "zugelu",
    //   locales: {
    //     "/": {
    //       placeholder: "搜索文档",
    //       translations: {
    //         button: {
    //           buttonText: "搜索文档",
    //           buttonAriaLabel: "搜索文档",
    //         },
    //         modal: {
    //           searchBox: {
    //             resetButtonTitle: "清除查询条件",
    //             resetButtonAriaLabel: "清除查询条件",
    //             cancelButtonText: "取消",
    //             cancelButtonAriaLabel: "取消",
    //           },
    //           startScreen: {
    //             recentSearchesTitle: "搜索历史",
    //             noRecentSearchesText: "没有搜索历史",
    //             saveRecentSearchButtonTitle: "保存至搜索历史",
    //             removeRecentSearchButtonTitle: "从搜索历史中移除",
    //             favoriteSearchesTitle: "收藏",
    //             removeFavoriteSearchButtonTitle: "从收藏中移除",
    //           },
    //           errorScreen: {
    //             titleText: "无法获取结果",
    //             helpText: "你可能需要检查你的网络连接",
    //           },
    //           footer: {
    //             selectText: "选择",
    //             navigateText: "切换",
    //             closeText: "关闭",
    //             searchByText: "搜索提供者",
    //           },
    //           noResultsScreen: {
    //             noResultsText: "无法找到相关结果",
    //             suggestedQueryText: "你可以尝试查询",
    //           },
    //         },
    //       },
    //     },
    //   },
    // })
  ]
});
