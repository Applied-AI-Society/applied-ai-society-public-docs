// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Applied AI Society Docs',
  tagline: 'Case studies, playbooks, and resources for applied AI practitioners.',
  favicon: 'img/favicon.ico',

  url: 'https://docs.appliedaisociety.org',
  baseUrl: '/',

  organizationName: 'applied-ai-society',
  projectName: 'applied-ai-society',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/applied-ai-society/applied-ai-society/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
            href: '/colors',
            label: 'Colors',
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
    }),
};

export default config;

