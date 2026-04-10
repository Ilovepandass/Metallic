import fs from "fs";
import path from "path";

// ✅ SAFE cache creation (won’t crash CI)
try {
  const cachePath = path.resolve(
    process.cwd(),
    "node_modules/@rubynetwork/rh/cache-js"
  );

  if (!fs.existsSync(cachePath)) {
    fs.mkdirSync(cachePath, { recursive: true });
  }
} catch (err) {
  console.warn("RH cache init skipped (CI-safe mode)");
}

import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { ChemicalVitePlugin } from "chemicaljs";
import { ViteMinifyPlugin } from "vite-plugin-minify";

// @ts-ignore
import { generateFile } from "./src/util/generateFileVite";
// @ts-ignore
import { generateThemes } from "./src/util/generateThemes";
import themes from "./src/themes.json";

export default defineConfig({
  build: {
    outDir: "build",
  },

  plugins: [
    ChemicalVitePlugin(),

    generateFile([
      {
        contentType: "text/css",
        output: "themes.css",
        data: generateThemes(themes),
      },
    ]),

    ViteMinifyPlugin(),
    preact(),
  ],
});
