import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://leog.web.app",
  integrations: [
    mdx(),
    sitemap(),
    compress({
      css: true,
      html: true,
      img: false,
      js: true,
      svg: true,
    }),
  ],
});
