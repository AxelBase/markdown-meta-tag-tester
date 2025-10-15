import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
	adapter: adapter({
	  pages: 'docs',
	  assets: 'docs',
	  fallback: '404.html',
	  precompress: false
	}),
	paths: {
	  base: '/markdown-meta-tag-tester'
	},
	prerender: {
	  entries: ['*'],
	  handleHttpError: 'warn'
	}
  }
};

export default config;
