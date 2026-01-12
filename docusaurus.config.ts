import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Applied AI Society Docs',
  tagline: 'Case studies, playbooks, and resources for applied AI practitioners.',
  favicon: 'img/favicon.ico',

  url: 'https://docs.appliedaisociety.org',
  baseUrl: '/',

  organizationName: 'applied-ai-society',
  projectName: 'applied-ai-society',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
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
          editUrl: 'https://github.com/applied-ai-society/applied-ai-society/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    navbar: {
      title: '',
    logo: {
      alt: 'Applied AI Society',
      src: 'img/logo.svg',
      srcDark: 'img/logo-dark.svg',
    },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://appliedaisociety.org/events',
          label: 'Events',
          position: 'left',
        },
        {
          to: '/docs/brand',
          label: 'Brand',
          position: 'left',
        },
        {
          href: 'https://github.com/applied-ai-society',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© 2026 Applied AI Society`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

