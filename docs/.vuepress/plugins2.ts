import { searchPlugin } from "@vuepress/plugin-search";

const plugins = [
  searchPlugin({
    // locales: {
    //   '/': {
    //     placeholder: '搜索',
    //   },
    // },
    // 排除首页
    isSearchable: (page) => page.path !== '/',
  }),
]

export default plugins