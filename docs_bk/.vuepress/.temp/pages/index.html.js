import comp from "C:/--F--/codes/blog/ziyu_blog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Hello VuePress\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1743411948000,\"contributors\":[{\"name\":\"ZiYu\",\"username\":\"ZiYu\",\"email\":\"ziyedeyuu@163.com\",\"commits\":1,\"url\":\"https://github.com/ZiYu\"}],\"changelog\":[{\"hash\":\"33319ceb69ef6981e2d2eb53f318d4882a379237\",\"time\":1743411948000,\"email\":\"ziyedeyuu@163.com\",\"author\":\"ZiYu\",\"message\":\"实验\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
