import React from 'react';
import Link from '@docusaurus/Link';
import styles from './RecentlyUpdated.module.css';
import recentUpdates from '../data/recentUpdates.json';

interface RecentUpdate {
  title: string;
  link: string;
  date: string;
  summary: string;
  tag: string;
}

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
          {(recentUpdates as RecentUpdate[]).map((update, idx) => (
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
