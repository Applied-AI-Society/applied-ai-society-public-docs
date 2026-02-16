import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import RecentlyUpdated from '../components/RecentlyUpdated';

interface DocSection {
  title: string;
  description: string;
  link: string;
  icon: string;
  color: string;
}

interface QuickLinkItem {
  label: string;
  link: string;
  icon: string;
  external?: boolean;
}

const docSections: DocSection[] = [
  {
    title: 'Philosophy',
    description: 'The Applied AI Canon and our operating principles.',
    link: '/docs/philosophy',
    icon: '🧭',
    color: 'dark',
  },
  {
    title: 'Case Studies',
    description: 'Real projects, real results. Learn from documented implementations across industries.',
    link: '/docs/case-studies',
    icon: '📊',
    color: 'orange',
  },
  {
    title: 'Playbooks',
    description: 'Step-by-step guides for running events, starting chapters, and building your applied AI career.',
    link: '/docs/playbooks',
    icon: '📚',
    color: 'amber',
  },
];

const quickLinks: QuickLinkItem[] = [
  { label: 'View Brand Assets', link: '/docs/brand', icon: '🎨' },
  { label: 'Join / Contribute', link: 'https://appliedaisociety.org/contribute', icon: '🤝', external: true },
  { label: 'Contribute on GitHub', link: 'https://github.com/applied-ai-society', icon: '💻', external: true },
];

function HeroSection(): React.ReactElement {
  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>Documentation</div>
        <h1 className={styles.heroTitle}>
          Applied AI Society Docs
        </h1>
        <p className={styles.heroSubtitle}>
          The Applied AI Society is a community of people learning to apply AI professionally. This is where we share everything we figure out: playbooks, case studies, and open documentation.
        </p>
        <div className={styles.heroActions}>
          <Link className={styles.primaryButton} to="/docs/case-studies">
            Browse Case Studies
          </Link>
          <Link className={styles.secondaryButton} to="/docs/playbooks">
            View Playbooks
          </Link>
          <a className={styles.tertiaryButton} href="https://appliedaisociety.org/contribute" target="_blank" rel="noopener noreferrer">
            Get Involved
          </a>
        </div>
      </div>
    </header>
  );
}

function DocCard({ section }: { section: DocSection }): React.ReactElement {
  return (
    <Link to={section.link} className={clsx(styles.docCard, styles[`docCard${section.color}`])}>
      <div className={styles.docCardIcon}>{section.icon}</div>
      <div className={styles.docCardContent}>
        <h3 className={styles.docCardTitle}>{section.title}</h3>
        <p className={styles.docCardDescription}>{section.description}</p>
      </div>
      <span className={styles.docCardArrow}>→</span>
    </Link>
  );
}

function DocsGrid(): React.ReactElement {
  return (
    <section className={styles.docsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Explore the Docs</h2>
        <div className={styles.docsGrid}>
          {docSections.map((section, idx) => (
            <DocCard key={idx} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickLinks(): React.ReactElement {
  return (
    <section className={styles.quickLinksSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Quick Links</h2>
        <div className={styles.quickLinksGrid}>
          {quickLinks.map((item, idx) => (
            <Link 
              key={idx} 
              to={item.link} 
              className={styles.quickLink}
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className={styles.quickLinkIcon}>{item.icon}</span>
              <span className={styles.quickLinkLabel}>{item.label}</span>
              {item.external && <span className={styles.externalIcon}>↗</span>}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection(): React.ReactElement {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutCard}>
          <div className={styles.aboutContent}>
            <h2>What is the Applied AI Society?</h2>
            <p>
              We invest in young people who are comfortable with AI and help them apply
              that fluency professionally. Through <strong>hyperlocal chapters</strong> led
              by AI-native young leaders, we create communities where the next generation of
              applied AI practitioners learns by doing. The businesses that support our chapters
              gain access to the best hires of the next decade. That is the win-win at the
              heart of everything we do.
            </p>
            <p>
              This documentation site contains our collective knowledge: case studies
              from real projects, playbooks for running chapters and events, and guides for
              anyone building an applied AI career.
            </p>
            <p>
              The Applied AI Society is grateful to <strong>OpenTeams</strong> and{' '}
              <strong>Open Technology Incubator (OT Incubator)</strong> as founding sponsors.
              OpenTeams is building the infrastructure layer for applied AI, including Nebari, an
              open-source operating system for AI workflows that gives organizations sovereignty
              over their data. OT Incubator provides entrepreneurs with services and
              capital to create the transformative organizations and businesses that will bring about
              the Applied AI Economy built around open technology.
            </p>
            <p>
              Looking for the main site? Visit{' '}
              <a href="https://appliedaisociety.org" target="_blank" rel="noopener noreferrer">
                appliedaisociety.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer(): React.ReactElement {
  return (
    <section className={styles.docsFooter}>
      <div className={styles.container}>
        <p>
          This documentation is open source and evolves as we learn.{' '}
          <a href="https://github.com/applied-ai-society" target="_blank" rel="noopener noreferrer">
            Contribute on GitHub
          </a>
        </p>
      </div>
    </section>
  );
}

export default function Home(): React.ReactElement {
  return (
    <Layout
      title="Docs"
      description="The Applied AI Society is a community of people learning to apply AI professionally. Playbooks, case studies, and open documentation."
    >
      <HeroSection />
      <main>
        <DocsGrid />
        <RecentlyUpdated />
        <QuickLinks />
        <AboutSection />
        <Footer />
      </main>
    </Layout>
  );
}

