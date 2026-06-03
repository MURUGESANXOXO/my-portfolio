// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When deploying to Vercel, switch the nitro preset to `vercel` so the build
// emits a Vercel-compatible output (.vercel/output) instead of a Cloudflare
// Worker bundle. Set DEPLOY_TARGET=vercel in your Vercel project env (or it
// auto-detects via the VERCEL env var Vercel injects at build time).
const isVercel = !!process.env.VERCEL || process.env.DEPLOY_TARGET === "vercel";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: isVercel ? { preset: "vercel" } : undefined,
});
