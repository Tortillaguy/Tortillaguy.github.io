import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://cacho.dev",
  integrations: [sitemap({ filter: (page) => !page.endsWith("/lab/") }), react()],
  experimental: {
    clientPrerender: true,
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
