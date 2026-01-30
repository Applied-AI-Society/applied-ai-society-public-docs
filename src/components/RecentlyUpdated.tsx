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
    title: 'Applied AI Live',
    link: '/docs/playbooks/chapter-leader/applied-ai-live',
    date: '2026-01-30',
    summary: 'Updated with real budget, attendance, and first-event lessons from Live #1.',
    tag: 'Updated',
  },
  {
    title: 'Applied AI Live #1 — Austin',
    link: '/docs/playbooks/chapter-leader/event-recaps/applied-ai-live-1',
    date: '2026-01-30',
    summary: 'New: first event recap with format, costs, and learnings.',
    tag: 'New',
  },
  {
    title: 'Building Partnerships',
    link: '/docs/playbooks/chapter-leader/building-partnerships',
    date: '2026-01-30',
    summary: 'Added local partner model and AITX partnership learnings.',
    tag: 'Updated',
  },
  {
    title: 'Getting Things Done',
    link: '/docs/playbooks/chapter-leader/getting-things-done',
    date: '2026-01-30',
    summary: 'Added real-world proof of the AI workspace advantage from Live #1.',
    tag: 'Updated',
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
          <h2 className={styles.sectionTitle}>Recently Updated</h2>
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
