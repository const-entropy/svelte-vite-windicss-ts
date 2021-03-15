import svelte from "@svitejs/vite-plugin-svelte";
import WindiCss from "vite-plugin-windicss";
import { defineConfig } from "vite";
import autoPreprocess from "svelte-preprocess";

module.exports = defineConfig(({ mode }) => {
  const isProduction = mode === "production";
  return {
    root: "src",
    plugins: [
      // uses enforce: pre
      svelte({
        hot: !isProduction,
        emitCss: true,
        preprocess: autoPreprocess({
          defaults: {
            script: "typescript",
          },
        }),
      }),
      WindiCss(),
    ],
    build: {
      minify: isProduction,
    },
  };
});
