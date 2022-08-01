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

  // 是否展示编辑此页链接
  editLink: false,

  // 是否显示页面贡献者
  contributors: false,

  footer: '<a href="/vuepress-blog/posts/about/site.html">关于网站</a>',

  displayFooter: true,

  pageInfo: ["Original", "PageView", "Date", "Category", "Tag"],

  blog: {
    description: "前端小白一枚",
    intro: "posts/about",
    medias: {
      Email: "https://www.zugelu.com",
      GitHub: "https://github.com/luzhe0359",
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
      autoExcerpt: true,
    },
    comment: {
      /**
       * Using Waline
       */
      provider: "Waline",
      serverURL: "https://vuepress-blog-comment.vercel.app",
    }
  },
});
