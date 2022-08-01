import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://www.zugelu.com",

  author: {
    name: "足各路",
    url: "https://www.zugelu.com",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "luzhe0359",

  fullscreen: true,

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  // 文档在仓库中的目录
  docsDir: "vuepress-blog/docs",

  // 是否全局启用路径导航。
  breadcrumb: false,

  // 向下滚动时自动隐藏导航栏
  navbarAutoHide: "always",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "默认页脚",

  displayFooter: true,

  pageInfo: ["Original", "PageView", "Date", "Category", "Tag"],

  blog: {
    description: "一个前端开发者",
    intro: "/intro.html",
    medias: {
      Email: "https://www.zugelu.com",
      GitHub: "https://github.com/luzhe0359",
      QQ: "https://www.zugelu.com",
      Wechat: "https://www.zugelu.com",
      Zhihu: "https://www.zhihu.com/people/zugelu",
    },
    // 文章列表中展示的文章信息
    articleInfo: ["Original", "PageView", "Date", "Category", "Tag"],
  },

  encrypt: {
    config: {
      "/posts/encrypt/": ["0359"],
    },
  },

  plugins: {
    blog: {
      // 是否为每个页面生成摘录
      // autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Giscus
       */
      // provider: "Giscus",
      // repo: "vuepress-theme-hope/giscus-discussions",
      // repoId: "R_kgDOG_Pt2A",
      // category: "Announcements",
      // categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      provider: "Waline",
      serverURL: "https://vuepress-blog-comment.vercel.app",
    },
  },
});
