import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Applied AI Society Docs',
  tagline: 'A shared field notes hub for making sense of and seizing the opportunities in the applied AI economy.',
  favicon: 'img/favicon.svg',

  url: 'https://docs.appliedaisociety.org',
  baseUrl: '/',
  trailingSlash: false,

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
          editUrl: 'https://github.com/Applied-AI-Society/applied-ai-society-public-docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs/playbooks/practitioner/mvp-personal-agentic-os',
            to: '/docs/workshops/supersuit-up',
          },
          // Sovereign Agentic Business OS moved under /docs/concepts/
          { from: '/docs/sovereign-agentic-business-os', to: '/docs/concepts/sovereign-agentic-business-os' },
          { from: '/docs/sovereign-agentic-business-os/principles', to: '/docs/concepts/sovereign-agentic-business-os/principles' },
          { from: '/docs/sovereign-agentic-business-os/question-bank', to: '/docs/concepts/sovereign-agentic-business-os/question-bank' },
          // Legacy moved under /docs/concepts/
          { from: '/docs/legacy', to: '/docs/concepts/legacy' },
          { from: '/docs/legacy/why-it-matters', to: '/docs/concepts/legacy/why-it-matters' },
          { from: '/docs/legacy/getting-started', to: '/docs/concepts/legacy/getting-started' },
          { from: '/docs/legacy/dont-assume-common-sense', to: '/docs/concepts/legacy/dont-assume-common-sense' },
          { from: '/docs/legacy/align-before-committing', to: '/docs/concepts/legacy/align-before-committing' },
          { from: '/docs/legacy/make-every-file-count', to: '/docs/concepts/legacy/make-every-file-count' },
          { from: '/docs/legacy/make-your-company-refactorable', to: '/docs/concepts/legacy/make-your-company-refactorable' },
          { from: '/docs/legacy/empower-your-knowledge-worker', to: '/docs/concepts/legacy/empower-your-knowledge-worker' },
          { from: '/docs/legacy/protect-your-truth', to: '/docs/concepts/legacy/protect-your-truth' },
          { from: '/docs/legacy/start-your-company-bible', to: '/docs/concepts/legacy/start-your-company-bible' },
          { from: '/docs/legacy/migrate-to-refactorable-systems', to: '/docs/concepts/legacy/migrate-to-refactorable-systems' },
          { from: '/docs/legacy/truth-as-context', to: '/docs/concepts/legacy/truth-as-context' },
          { from: '/docs/legacy/maintain-coherence', to: '/docs/concepts/legacy/maintain-coherence' },
          { from: '/docs/legacy/source-controller', to: '/docs/concepts/legacy/source-controller' },
          { from: '/docs/legacy/voice-transcriber', to: '/docs/concepts/legacy/voice-transcriber' },
          // Renamed from "Being Someone's Guy" to "Being Someone's Go-To Person" (more inclusive language)
          { from: '/docs/concepts/being-someones-guy', to: '/docs/concepts/being-someones-go-to-person' },
        ],
      },
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: false,
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card-black.png',
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
          href: 'https://appliedaisociety.org/contribute',
          label: 'Contribute',
          position: 'left',
        },
        {
          href: 'https://github.com/Applied-AI-Society/applied-ai-society-public-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
        },
      ],
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

