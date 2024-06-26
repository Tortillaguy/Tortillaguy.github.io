import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://cacho.dev",
  integrations: [mdx(), sitemap(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), react(), svelte()]
});