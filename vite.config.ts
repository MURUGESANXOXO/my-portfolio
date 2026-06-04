// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When deploying to Vercel, switch the nitro preset to `vercel` and write the
// build output into `.vercel/output` (Vercel Build Output API v3). The lovable
// config defaults nitro output to `dist/`, which Vercel will NOT pick up, so
// we override `output.*` to the paths nitro's vercel preset expects.
const isVercel = !!process.env.VERCEL || process.env.DEPLOY_TARGET === "vercel";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: isVercel
    ? {
        preset: "vercel",
        output: {
          dir: ".vercel/output",
          publicDir: ".vercel/output/static",
          serverDir: ".vercel/output/functions/__server.func",
        },
      }
    : undefined,
});
