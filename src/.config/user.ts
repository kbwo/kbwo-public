import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  site: {
    title: 'kbwo',
    subtitle: '',
    author: 'kbwo',
    description: '',
    website: 'https://kbwo.github.io/kbwo-public/',
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/kbwo',
      },
      {
        name: 'twitter',
        href: 'https://twitter.com/kbwo',
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
        name: 'About',
        href: '/kbwo-public/about',
      },
    ],
  },
  appearance: {
    theme: 'light',
    locale: 'ja-jp',
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
    twitter: '@__kbwo',
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
