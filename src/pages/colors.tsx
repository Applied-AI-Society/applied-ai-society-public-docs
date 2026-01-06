import React from 'react';
import Layout from '@theme/Layout';
import styles from './colors.module.css';

interface Color {
  name: string;
  hex: string;
  cssVar: string;
}

interface ColorGroup {
  name: string;
  description: string;
  colors: Color[];
}

const colorGroups: ColorGroup[] = [
  {
    name: 'Primary Orange',
    description: 'The heart of our brand. Used for CTAs, links, and key highlights.',
    colors: [
      { name: 'Orange', hex: '#E67B35', cssVar: '--aais-orange' },
      { name: 'Orange Light', hex: '#F09550', cssVar: '--aais-orange-light' },
      { name: 'Orange Dark', hex: '#C95F1C', cssVar: '--aais-orange-dark' },
    ],
  },
  {
    name: 'Amber & Gold',
    description: 'Warm accent tones for gradients and secondary highlights.',
    colors: [
      { name: 'Amber', hex: '#D4A017', cssVar: '--aais-amber' },
      { name: 'Gold', hex: '#E8B923', cssVar: '--aais-gold' },
    ],
  },
  {
    name: 'Cream Backgrounds',
    description: 'Warm, inviting backgrounds that feel approachable and professional.',
    colors: [
      { name: 'Cream', hex: '#FAF7F1', cssVar: '--aais-cream' },
      { name: 'Cream Dark', hex: '#F5F0E6', cssVar: '--aais-cream-dark' },
      { name: 'Cream Darker', hex: '#EDE7DA', cssVar: '--aais-cream-darker' },
    ],
  },
  {
    name: 'Olive Green',
    description: 'Natural accent inspired by the rolling hills. Used sparingly for variety.',
    colors: [
      { name: 'Olive', hex: '#5B6E4D', cssVar: '--aais-olive' },
      { name: 'Olive Light', hex: '#7A8F6A', cssVar: '--aais-olive-light' },
      { name: 'Olive Dark', hex: '#3F4D36', cssVar: '--aais-olive-dark' },
    ],
  },
  {
    name: 'Text Colors',
    description: 'Readable, accessible text hierarchy.',
    colors: [
      { name: 'Text Dark', hex: '#1A1A1A', cssVar: '--aais-text-dark' },
      { name: 'Text Medium', hex: '#4A4A4A', cssVar: '--aais-text-medium' },
      { name: 'Text Light', hex: '#6B6B6B', cssVar: '--aais-text-light' },
    ],
  },
];

function ColorSwatch({ color }: { color: Color }): React.ReactElement {
  const isLight = ['#FAF7F1', '#F5F0E6', '#EDE7DA', '#E8B923', '#F09550'].includes(color.hex);
  
  const copyToClipboard = (text: string): void => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={styles.swatch}>
      <div 
        className={styles.swatchColor} 
        style={{ backgroundColor: color.hex }}
        onClick={() => copyToClipboard(color.hex)}
        title="Click to copy hex"
      >
        <span className={styles.swatchHex} style={{ color: isLight ? '#1A1A1A' : '#FFFFFF' }}>
          {color.hex}
        </span>
      </div>
      <div className={styles.swatchInfo}>
        <span className={styles.swatchName}>{color.name}</span>
        <code className={styles.swatchVar}>{color.cssVar}</code>
      </div>
    </div>
  );
}

function ColorGroupComponent({ group }: { group: ColorGroup }): React.ReactElement {
  return (
    <div className={styles.colorGroup}>
      <h2 className={styles.groupTitle}>{group.name}</h2>
      <p className={styles.groupDescription}>{group.description}</p>
      <div className={styles.swatches}>
        {group.colors.map((color, idx) => (
          <ColorSwatch key={idx} color={color} />
        ))}
      </div>
    </div>
  );
}

interface GradientExampleProps {
  name: string;
  gradient: string;
  description: string;
}

function GradientExample({ name, gradient, description }: GradientExampleProps): React.ReactElement {
  return (
    <div className={styles.gradientCard}>
      <div className={styles.gradientPreview} style={{ background: gradient }} />
      <div className={styles.gradientInfo}>
        <h3 className={styles.gradientName}>{name}</h3>
        <p className={styles.gradientDescription}>{description}</p>
        <code className={styles.gradientCode}>{gradient}</code>
      </div>
    </div>
  );
}

export default function Colors(): React.ReactElement {
  return (
    <Layout
      title="Color Scheme"
      description="Applied AI Society brand color palette and design tokens"
    >
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>Color Scheme</h1>
            <p className={styles.subtitle}>
              The Applied AI Society visual identity. Warm, approachable, and professional.
            </p>
          </header>

          <section className={styles.overview}>
            <div className={styles.overviewCard}>
              <div className={styles.overviewGradient} />
              <div className={styles.overviewContent}>
                <h2>Our Palette</h2>
                <p>
                  Inspired by sunrise over rolling hills. Warm oranges and ambers convey energy 
                  and optimism. Cream backgrounds feel welcoming. Olive greens ground us in nature 
                  and growth.
                </p>
                <p>
                  Click any color swatch to copy its hex value.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.colors}>
            {colorGroups.map((group, idx) => (
              <ColorGroupComponent key={idx} group={group} />
            ))}
          </section>

          <section className={styles.gradients}>
            <h2 className={styles.sectionTitle}>Gradients</h2>
            <p className={styles.sectionDescription}>
              Key gradient combinations used throughout the brand.
            </p>
            <div className={styles.gradientGrid}>
              <GradientExample
                name="Primary Button"
                gradient="linear-gradient(135deg, #E67B35 0%, #D4A017 100%)"
                description="Used for primary CTAs and important actions."
              />
              <GradientExample
                name="Orange Section"
                gradient="linear-gradient(135deg, #E67B35 0%, #C95F1C 100%)"
                description="Background for highlighted content sections."
              />
              <GradientExample
                name="Cream Background"
                gradient="linear-gradient(180deg, #FAF7F1 0%, #F5F0E6 100%)"
                description="Subtle depth for page backgrounds."
              />
              <GradientExample
                name="Sun Glow"
                gradient="radial-gradient(circle, #E8B923 40%, #D4A017 100%)"
                description="Radial gradient for decorative sun elements."
              />
            </div>
          </section>

          <section className={styles.usage}>
            <h2 className={styles.sectionTitle}>Usage Guidelines</h2>
            <div className={styles.usageGrid}>
              <div className={styles.usageCard}>
                <h3>Primary Actions</h3>
                <p>Use <strong>Orange (#E67B35)</strong> for buttons, links, and interactive elements that need attention.</p>
              </div>
              <div className={styles.usageCard}>
                <h3>Backgrounds</h3>
                <p>Use <strong>Cream (#FAF7F1)</strong> as the primary background. Use darker creams for cards and sections.</p>
              </div>
              <div className={styles.usageCard}>
                <h3>Text</h3>
                <p>Use <strong>Text Dark (#1A1A1A)</strong> for headings, <strong>Text Medium (#4A4A4A)</strong> for body copy.</p>
              </div>
              <div className={styles.usageCard}>
                <h3>Accents</h3>
                <p>Use <strong>Olive (#5B6E4D)</strong> sparingly for variety. Great for icons and decorative elements.</p>
              </div>
            </div>
          </section>

          <section className={styles.cssVars}>
            <h2 className={styles.sectionTitle}>CSS Variables</h2>
            <p className={styles.sectionDescription}>
              All colors are available as CSS custom properties for easy theming.
            </p>
            <pre className={styles.codeBlock}>
{`:root {
  /* Primary Orange */
  --aais-orange: #E67B35;
  --aais-orange-light: #F09550;
  --aais-orange-dark: #C95F1C;
  
  /* Amber & Gold */
  --aais-amber: #D4A017;
  --aais-gold: #E8B923;
  
  /* Cream Backgrounds */
  --aais-cream: #FAF7F1;
  --aais-cream-dark: #F5F0E6;
  --aais-cream-darker: #EDE7DA;
  
  /* Olive Green */
  --aais-olive: #5B6E4D;
  --aais-olive-light: #7A8F6A;
  --aais-olive-dark: #3F4D36;
  
  /* Text Colors */
  --aais-text-dark: #1A1A1A;
  --aais-text-medium: #4A4A4A;
  --aais-text-light: #6B6B6B;
}`}
            </pre>
          </section>
        </div>
      </main>
    </Layout>
  );
}

