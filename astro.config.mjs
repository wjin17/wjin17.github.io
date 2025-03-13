// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "everforest-dark" },
    }),
    sitemap(),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
