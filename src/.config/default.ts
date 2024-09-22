import type { ThemeConfig } from '~/types'

// This is the default configuration for the template, please do not modify it directly.
// You can override this configuration in the `.config/user.ts` file.

export const defaultConfig: ThemeConfig = {
  site: {
    title: '活版印字',
    subtitle: 'Typography',
    author: 'Typography',
    description: 'Rediscory the beauty of typography',
    website: 'https://astro-theme-typography.vercel.app/',
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/moeyua/astro-theme-typography',
      },
      {
        name: 'rss',
        href: '/kbwo-public/atom.xml',
      },
      {
        name: 'twitter',
        href: 'https://github.com/moeyua/astro-theme-typography',
      },
      {
        name: 'mastodon',
        href: 'https://github.com/moeyua/astro-theme-typography',
      },
    ],
    navLinks: [
      {
        name: 'Posts',
        href: '/kbwo-public/posts/page/1',
      },
      {
        name: 'Archive',
        href: '/kbwo-public/archive',
      },
      {
        name: 'Categories',
        href: '/kbwo-public/categories',
      },
      {
        name: 'About',
        href: '/kbwo-public/about',
      },
    ],
  },
  appearance: {
    theme: 'light',
    locale: 'zh-cn',
    colorsLight: {
      foreground: '#2e405b',
      background: '#ffffff',
    },
    colorsDark: {
      foreground: '#ffffff',
      background: '#2e405b',
    },
    fonts: {
      header:
        '"HiraMinProN-W6","Source Han Serif CN","Source Han Serif SC","Source Han Serif TC",serif',
      ui: '"Source Sans Pro","Roboto","Helvetica","Helvetica Neue","Source Han Sans SC","Source Han Sans TC","PingFang SC","PingFang HK","PingFang TC",sans-serif',
    },
  },
  seo: {
    twitter: '@moeyua13',
    meta: [],
    link: [],
  },
  comment: {
    // disqus: { shortname: "typography-astro" },
  },
  rss: {
    fullText: true,
  },
}
