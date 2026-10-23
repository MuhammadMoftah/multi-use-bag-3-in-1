// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';

const productPath = '/3-in-1-travel-garment-duffel-bag';

// https://astro.build/config
export default defineConfig({
  // Set to the production origin (e.g. 'https://example.com') once known. It enables the
  // canonical URL, og:url, og:image and absolute image URLs in the Product structured data.
  // site: 'https://example.com',

  integrations: [vue()],

  redirects: {
    '/': productPath,
  },

  build: {
    inlineStylesheets: 'always',
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Cormorant Garamond',
      cssVariable: '--font-cormorant',
      weights: [500],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: [],
    },
    {
      provider: fontProviders.google(),
      name: 'Manrope',
      cssVariable: '--font-manrope',
      weights: ['400 600'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: [],
    },
    // Arabic companions: Latin glyphs and digits keep coming from the fonts above, so the
    // generic fallbacks live here (a generic family earlier in the stack would catch Arabic).
    {
      provider: fontProviders.google(),
      name: 'Amiri',
      cssVariable: '--font-amiri',
      weights: [400],
      styles: ['normal'],
      subsets: ['arabic'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Sans Arabic',
      cssVariable: '--font-plex-arabic',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['arabic'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
