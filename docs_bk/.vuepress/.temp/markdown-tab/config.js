import { CodeTabs } from "C:/--F--/codes/blog/ziyu_blog/node_modules/.pnpm/@vuepress+plugin-markdown-t_90493a2ec120f499fd0fb42d37d8a07d/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/--F--/codes/blog/ziyu_blog/node_modules/.pnpm/@vuepress+plugin-markdown-t_90493a2ec120f499fd0fb42d37d8a07d/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/--F--/codes/blog/ziyu_blog/node_modules/.pnpm/@vuepress+plugin-markdown-t_90493a2ec120f499fd0fb42d37d8a07d/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
