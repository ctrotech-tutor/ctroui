import { defineConfig } from "vitepress"

export default defineConfig({
  title: "ctroui",
  description: "React UI library built on Radix UI + Tailwind CSS",
  lang: "en-US",

  head: [
    ["link", { rel: "icon", href: "/favicon.svg" }],
    ["meta", { property: "og:title", content: "ctroui" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "React UI library built on Radix UI + Tailwind CSS — accessible, composable, themeable components for modern React apps",
      },
    ],
  ],

  themeConfig: {
    logo: "/logo.svg",

    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "Components", link: "/components/core-ui" },
      {
        text: "v0.3.0",
        items: [
          { text: "Changelog", link: "https://github.com/ctrotech-tutor/ctroui/releases" },
          { text: "npm", link: "https://www.npmjs.com/package/ctroui" },
          { text: "GitHub", link: "https://github.com/ctrotech-tutor/ctroui" },
        ],
      },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            { text: "Getting Started", link: "/guide/" },
            { text: "Installation", link: "/guide/installation" },
            { text: "Theming", link: "/guide/theming" },
          ],
        },
      ],
      "/components/": [
        {
          text: "Components",
          items: [
            { text: "Core UI", link: "/components/core-ui" },
            { text: "Navigation", link: "/components/navigation" },
            { text: "Overlay & Dialogs", link: "/components/overlay" },
            { text: "Forms & Input", link: "/components/forms" },
            { text: "Data Display", link: "/components/data-display" },
            { text: "Utilities", link: "/components/utilities" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/ctrotech-tutor/ctroui" },
    ],

    search: {
      provider: "local",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright ctrotech",
    },
  },
})
