// @ts-ignore
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "天生我材必有用",
  description: "论程序员的自我修养",
  // base: "/",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Resume', link: '/resume' }
    ],

    sidebar: [
      {
        text: 'Resume',
        items: [
          { text: 'Resume', link: '/resume' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
