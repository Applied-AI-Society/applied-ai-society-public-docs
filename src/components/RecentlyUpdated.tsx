import React from 'react';
import Link from '@docusaurus/Link';
import styles from './RecentlyUpdated.module.css';

interface RecentUpdate {
  title: string;
  link: string;
  date: string;
  summary: string;
  tag: string;
}

const recentUpdates: RecentUpdate[] = [
  {
    title: 'Presenting at Applied AI Live',
    link: '/docs/playbooks/presenter/presenting-at-applied-ai-live',
    date: '2026-02-11',
    summary: 'New guest presenter playbook with talk format, prep tips, and what to expect.',
    tag: 'New',
  },
  {
    title: 'Applied AI Canon & Principles',
    link: '/docs/philosophy/canon',
    date: '2026-02-07',
    summary: 'New canon of essential readings plus Principle 05: bridge builders and practitioners.',
    tag: 'New',
  },
  {
    title: 'Legacy Framework',
    link: '/docs/legacy',
    date: '2026-02-05',
    summary: 'Full framework for managing organizational truth: principles, processes, and tools.',
    tag: 'New',
  },
  {
    title: 'Writing & Sharing Event Recaps',
    link: '/docs/playbooks/chapter-leader/writing-and-sharing-event-recaps',
    date: '2026-02-01',
    summary: 'Playbook for turning event recordings into multi-platform recaps.',
    tag: 'New',
  },
];

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function RecentlyUpdated(): React.ReactElement {
  return (
    <section className={styles.recentlyUpdatedSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Recently Created or Updated</h2>
          <span className={styles.liveBadge}>
            <span className={styles.liveDot} />
            Actively maintained
          </span>
        </div>
        <div className={styles.updatesGrid}>
          {recentUpdates.map((update, idx) => (
            <Link key={idx} to={update.link} className={styles.updateCard}>
              <div className={styles.updateCardHeader}>
                <span className={styles.updateTag}>{update.tag}</span>
                <span className={styles.updateDate}>{formatDate(update.date)}</span>
              </div>
              <h3 className={styles.updateTitle}>{update.title}</h3>
              <p className={styles.updateSummary}>{update.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
