import { GitContributors } from "C:/--F--/codes/blog/ziyu_blog/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_17079e0f87bcba73b8571a6e7a2c36e6/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/--F--/codes/blog/ziyu_blog/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_17079e0f87bcba73b8571a6e7a2c36e6/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
