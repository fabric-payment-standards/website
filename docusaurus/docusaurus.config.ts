import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Fabric Payment Standards',
  tagline: 'Neutral payment infrastructure for enhanced interoperability between banks and existing financial systems, relying on cryptographic algorithms to enable user-centric, simpler and more efficient payment flows',
  favicon: 'https://fabricpaymentstandards.org/img/logo-512x512.png',

  future: {
    v4: true,
  },

  url: 'https://fabricpaymentstandards.org',
  baseUrl: '/specs/',

  organizationName: 'fabric-payment-standards',
  projectName: 'docs',
  onBrokenLinks: 'throw',
  //onBrokenMarkdownLinks: 'warn',
  //siteConfig.markdown.hooks.onBrokenMarkdownLinks
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    }
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/orgs/fabric-payment-standards/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Fabric Payment Standards',
      logo: {
        alt: 'Fabric Payment Standards Foundation Logo',
        src: 'https://fabricpaymentstandards.org/img/logo-512x512.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'fpsfSidebar', //'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          position: 'left',
          label: 'Home',
          href: 'https://fabricpaymentstandards.org',
        },
        {
          position: 'right',
          label: 'Donate',
          href: 'https://fabricpaymentstandards.org/donate',
        },
        {
          href: 'https://github.com/orgs/fabric-payment-standards/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {

      logo: {
        alt: "Fabric Payment Standards logo",
        src: 'img/icon-blue-bg.png',
        width: 80
      },
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.com/invite/fabric-payment-standards' },
            { label: 'X (Twitter)', href: 'https://x.com/fabric-payment-standards' },
            { label: 'Blog / Updates', to: 'https://stablecoinstack.org/blog' },
          ],
        },
      ],
      copyright: `
    © ${new Date().getFullYear()} Fabric Payment Standards.
    Apache License, Version 2.0. Fabric Payment Standards is open-source and community-driven.
  `,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;