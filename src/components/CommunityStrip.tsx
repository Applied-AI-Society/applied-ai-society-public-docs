import React from 'react';
import styles from './CommunityStrip.module.css';

interface Photo {
  src: string;
  alt: string;
}

interface CommunityStripProps {
  title?: string;
  intro?: string;
  photos?: Photo[];
}

const DEFAULT_PHOTOS: Photo[] = [
  { src: '/img/about/networking-in-room.jpg', alt: 'Practitioners networking at a community event' },
  { src: '/img/about/travis-networking.jpg', alt: 'Travis Oliphant with community members' },
  { src: '/img/about/applied-ai-live-presenters.webp', alt: 'Practitioners presenting their work at an Applied AI Live event' },
];

const DEFAULT_INTRO =
  'Applied AI Society is a community of practice. It comes to life in rooms of real people, learning to wield this technology together. Here is what that looks like on the ground.';

export default function CommunityStrip({
  title = 'The Community, In the Room',
  intro = DEFAULT_INTRO,
  photos = DEFAULT_PHOTOS,
}: CommunityStripProps): React.ReactElement {
  return (
    <section className={styles.communityStrip}>
      <div className={styles.container}>
        {title && <h2 className={styles.sectionTitle}>{title}</h2>}
        {intro && <p className={styles.intro}>{intro}</p>}
        <div className={styles.grid}>
          {photos.map((p, i) => (
            <div key={i} className={styles.photo}>
              <img src={p.src} alt={p.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
