import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

import markdoc from "@astrojs/markdoc";
import keystaticAstro from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [tailwind(), react(), markdoc(), keystaticAstro()],
  adapter: vercel()
});
