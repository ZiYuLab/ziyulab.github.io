import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "ziyu(rain in the night)",
      description: "EN-US is not supported yet",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "子夜的雨",
      description: "子夜的雨，是最靠近心灵的地方",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
