// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';
import node from '@astrojs/node';

// `astro dev` runs on Node.js so the Keystatic editor can save straight to files on
// your computer. `astro build` targets Cloudflare, where editing goes through Keystatic Cloud.
const isBuild = process.argv.includes('build') || process.argv.includes('preview');

export default defineConfig({
  site: 'https://juniperhealth.info',
  // Pages are built as folders (/page/). 'ignore' lets the Keystatic editor's own routes work;
  // Cloudflare adds the trailing slash to public pages (see wrangler.jsonc html_handling).
  trailingSlash: 'ignore',
  // Every public page is built ahead of time as plain HTML.
  // Only the Keystatic editor routes run on the server.
  output: 'static',
  adapter: isBuild
    ? cloudflare({
        imageService: 'compile',
        prerenderEnvironment: 'node',
      })
    : node({ mode: 'standalone' }),
  integrations: [
    // React is only used inside the Keystatic editor, never on public pages.
    react({ include: ['**/node_modules/@keystatic/**'] }),
    markdoc(),
    keystatic(),
    sitemap({
      filter: (page) => !page.includes('/keystatic') && !page.includes('/404'),
      changefreq: 'monthly',
    }),
  ],
  build: {
    inlineStylesheets: 'always',
    format: 'directory',
  },
  compressHTML: true,
  vite: isBuild
    ? {
        // The Keystatic editor's server code uses some older CommonJS packages.
        // Pre-bundling them lets them run in Cloudflare's runtime.
        environments: {
          ssr: {
            optimizeDeps: {
              include: ['cookie', 'superstruct', '@keystatic/core', '@keystatic/core/api/generic', '@keystatic/astro/api'],
            },
          },
        },
      }
    : {},
  prefetch: false,
  image: {
    responsiveStyles: true,
  },
});
