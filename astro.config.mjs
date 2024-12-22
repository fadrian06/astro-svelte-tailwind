// @ts-check
import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

const __dirname = new URL(".", import.meta.url).pathname;
const [, currentFolderName] = __dirname.split('/').reverse();

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  base: `/${currentFolderName}/`
});
