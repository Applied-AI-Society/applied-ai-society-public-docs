import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'about/index',
    {
      type: 'category',
      label: 'Applied AI Literacy',
      link: {
        type: 'doc',
        id: 'applied-ai-literacy/index',
      },
      items: [
        'applied-ai-literacy/earthshot',
      ],
    },
    {
      type: 'category',
      label: 'Philosophy',
      link: {
        type: 'doc',
        id: 'philosophy/index',
      },
      items: [
        'philosophy/canon',
        'philosophy/principles',
        'philosophy/north-star',
        'philosophy/voices-from-the-frontier',
        'philosophy/why-field-notes',
      ],
    },
    {
      type: 'category',
      label: 'Roles',
      link: {
        type: 'doc',
        id: 'roles/index',
      },
      items: [
        'roles/ai-workflow-architect',
        'roles/ai-agent-consultant',
        'roles/fractional-ai-executive',
        'roles/ai-enablement-coach',
        'roles/business-os-administrator',
        'roles/ai-transition-coach',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      link: {
        type: 'doc',
        id: 'concepts/index',
      },
      items: [
        'concepts/context-engineering',
        'concepts/intent-engineering',
        'concepts/game-design',
        'concepts/liberation-architecture',
        'concepts/the-encounter',
        'concepts/the-token-economy',
        'concepts/roles-to-workflows',
        'concepts/observable-behavior-engineering',
        'concepts/ignorance-debt',
      ],
    },
    {
      type: 'category',
      label: 'Case Studies',
      link: {
        type: 'doc',
        id: 'case-studies/index',
      },
      items: [
        'case-studies/rostam-mahabadi',
        'case-studies/gary-sheng-media-automation',
        'case-studies/tim-dort-golts-personal-transformation',
      ],
    },
    {
      type: 'category',
      label: 'Playbooks',
      link: {
        type: 'doc',
        id: 'playbooks/index',
      },
      items: [
        {
          type: 'category',
          label: 'Chapter Leader',
          link: {
            type: 'doc',
            id: 'playbooks/chapter-leader/index',
          },
          items: [
            'playbooks/chapter-leader/starting-a-chapter',
            'playbooks/chapter-leader/event-formats',
            'playbooks/chapter-leader/applied-ai-live',
            'playbooks/chapter-leader/running-a-hackathon',
            'playbooks/chapter-leader/finding-a-photographer',
            'playbooks/chapter-leader/finding-a-venue',
            'playbooks/chapter-leader/generating-flyers',
            'playbooks/chapter-leader/recording-an-event',
            'playbooks/chapter-leader/case-study-interviews',
            'playbooks/chapter-leader/speaker-outreach',
            'playbooks/chapter-leader/event-promotion',
            'playbooks/chapter-leader/content-distribution',
            'playbooks/chapter-leader/building-partnerships',
            'playbooks/chapter-leader/hosting-an-event',
            'playbooks/chapter-leader/live-architecture-session',
            'playbooks/chapter-leader/writing-event-descriptions',
            'playbooks/chapter-leader/writing-and-sharing-event-recaps',
            'playbooks/chapter-leader/crm-setup',
            'playbooks/chapter-leader/linkedin-automation',
            'playbooks/chapter-leader/twitter-automation',
            'playbooks/chapter-leader/getting-things-done',
            'playbooks/chapter-leader/tools',
            {
              type: 'category',
              label: 'Event Recaps',
              link: { type: 'doc', id: 'playbooks/chapter-leader/event-recaps/index' },
              items: ['playbooks/chapter-leader/event-recaps/applied-ai-live-1', 'playbooks/chapter-leader/event-recaps/applied-ai-live-2'],
            },
          ],
        },
        {
          type: 'category',
          label: 'Presenter',
          link: {
            type: 'doc',
            id: 'playbooks/presenter/index',
          },
          items: [
            'playbooks/presenter/presenting-at-applied-ai-live',
          ],
        },
        {
          type: 'category',
          label: 'Practitioner',
          link: {
            type: 'doc',
            id: 'playbooks/practitioner/index',
          },
          items: [
            'playbooks/practitioner/applied-ai-economy',
            'playbooks/practitioner/icp-clarity',
            'playbooks/practitioner/experimental-improvement',
            'playbooks/practitioner/pricing',
            'playbooks/practitioner/finding-clients',
            'playbooks/practitioner/pilot-pitch',
            'playbooks/practitioner/minimum-viable-jarvis',
          ],
        },
        {
          type: 'category',
          label: 'Student / Explorer',
          link: {
            type: 'doc',
            id: 'playbooks/student/index',
          },
          items: [
            'playbooks/student/five-levels-of-value',
            'playbooks/student/you-are-what-you-eat',
          ],
        },
        {
          type: 'category',
          label: 'Business Owner',
          link: {
            type: 'doc',
            id: 'playbooks/business-owner/index',
          },
          items: [
            'playbooks/business-owner/why-ai',
            'playbooks/business-owner/quick-check',
            'playbooks/business-owner/situation-map',
            'playbooks/business-owner/pilot-scope',
            'playbooks/business-owner/beyond-automation',
            'playbooks/business-owner/hiring-practitioners',
            'playbooks/business-owner/workflow-decomposition',
            'playbooks/business-owner/ai-readiness-by-function',
            'playbooks/business-owner/dont-scale-slop',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Sovereign Agentic Business OS',
      link: {
        type: 'doc',
        id: 'sovereign-agentic-business-os/index',
      },
      items: [
        'sovereign-agentic-business-os/principles',
        'sovereign-agentic-business-os/question-bank',
      ],
    },
    {
      type: 'category',
      label: 'Truth Management',
      link: {
        type: 'doc',
        id: 'truth-management/index',
      },
      items: [
        'truth-management/why-it-matters',
        {
          type: 'category',
          label: 'Principles',
          items: [
            'truth-management/align-before-committing',
            'truth-management/dont-assume-common-sense',
            'truth-management/empower-your-truth-manager',
            'truth-management/make-every-file-count',
            'truth-management/make-your-company-refactorable',
            'truth-management/protect-your-truth',
          ],
        },
        {
          type: 'category',
          label: 'Processes',
          items: [
            'truth-management/start-your-company-bible',
            'truth-management/migrate-to-refactorable-systems',
            'truth-management/truth-as-context',
          ],
        },
        {
          type: 'category',
          label: 'Tools',
          items: [
            'truth-management/source-controller',
            'truth-management/voice-transcriber',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Standards',
      link: { type: 'doc', id: 'standards/index' },
      items: [
        {
          type: 'category',
          label: 'INTEGRATE.md',
          link: { type: 'doc', id: 'standards/integrate-md/index' },
          items: [
            'standards/integrate-md/writing-guide',
            'standards/integrate-md/example',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Brand',
      link: {
        type: 'doc',
        id: 'brand/index',
      },
      items: [
        'brand/ai-generation',
      ],
    },
    'university-partnerships',
    // 'partner', // Re-enable after corporate pilot with Ian Newell / OpenTeams
    'contact',
    'code-of-conduct',
  ],
};

export default sidebars;

