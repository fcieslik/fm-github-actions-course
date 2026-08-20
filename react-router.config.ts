import type { Config } from "@react-router/dev/config";
import { rm } from "node:fs/promises";
import { join } from "node:path";

export default {
  ssr: false,
  prerender: true,
  async buildEnd({ reactRouterConfig }) {
    // The server bundle is only an intermediate artifact used to generate the SPA entry.
    await rm(join(reactRouterConfig.buildDirectory, "server"), {
      recursive: true,
      force: true,
    });
  },
} satisfies Config;
