import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

interface ColorSwatchProps {
  color: string;
  name: string;
  border?: boolean;
}

export function ColorSwatch({ color, name, border = false }: ColorSwatchProps) {
  const { colorMode } = useColorMode();
  const borderColor = colorMode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)';

  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          width: '100px',
          height: '60px',
          backgroundColor: color,
          borderRadius: '6px',
          border: border ? `1px solid ${borderColor}` : 'none',
          marginBottom: '0.5rem',
        }}
      />
      <div>
        <strong>{name}</strong>
      </div>
      <code>{color}</code>
    </div>
  );
}

interface ColorSwatchRowProps {
  children: React.ReactNode;
}

export function ColorSwatchRow({ children }: ColorSwatchRowProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        marginBottom: '1rem',
      }}
    >
      {children}
    </div>
  );
}

interface GradientSwatchProps {
  gradient: string;
  name: string;
  description: string;
  border?: boolean;
}

export function GradientSwatch({ gradient, name, description, border = false }: GradientSwatchProps) {
  const { colorMode } = useColorMode();
  const borderColor = colorMode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)';

  return (
    <div>
      <div
        style={{
          width: '200px',
          height: '60px',
          background: gradient,
          borderRadius: '6px',
          border: border ? `1px solid ${borderColor}` : 'none',
          marginBottom: '0.5rem',
        }}
      />
      <div>
        <strong>{name}</strong>
      </div>
      <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>{description}</div>
    </div>
  );
}

export function GradientSwatchRow({ children }: ColorSwatchRowProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1.5rem',
        flexWrap: 'wrap',
        marginBottom: '1rem',
      }}
    >
      {children}
    </div>
  );
}

export function InlineColor({ color, children }: { color: string; children?: React.ReactNode }) {
  // Simple check for dark background to flip text color
  const isDark = color.toLowerCase() === '#1a1a1a' || color.toLowerCase() === '#3f4d36' || color.toLowerCase() === '#5b6e4d';
  return (
    <code
      style={{
        backgroundColor: color,
        color: isDark ? '#FFFFFF' : '#1A1A1A',
        padding: '0.1rem 0.3rem',
        borderRadius: '4px',
        border: '1px solid rgba(0,0,0,0.1)',
        fontWeight: 'bold',
      }}
    >
      {children || color}
    </code>
  );
}
