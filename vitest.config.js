import { defineConfig } from "vitest/config";
import path from "path";
export default defineConfig({
  test: {
    dir: "./tests/unit",
    globals: true,
    environment: "node",
  },
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./"),
    },
  },
});
