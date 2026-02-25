import React, { type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useThemeConfig, type NavbarLogo } from '@docusaurus/theme-common';
import ThemedImage from '@theme/ThemedImage';
import type { Props } from '@theme/Logo';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

/**
 * Detects Safari (but not Chrome/Edge which also report AppleWebKit).
 * SVG linearGradient on <text> elements renders incorrectly in Safari,
 * so we serve solid-color fallback SVGs to Safari users.
 */
function isSafariBrowser(): boolean {
  if (!ExecutionEnvironment.canUseDOM) return false;
  const ua = window.navigator.userAgent;
  return /Safari/.test(ua) && !/Chrome/.test(ua) && !/Chromium/.test(ua);
}

/** Swap `logo.svg` → `logo-safari.svg` (and dark variant) for Safari. */
function getSafariSrc(src: string): string {
  return src.replace(/\.svg$/, '-safari.svg');
}

function LogoThemedImage({
  logo,
  alt,
  imageClassName,
}: {
  logo: NavbarLogo;
  alt: string;
  imageClassName?: string;
}) {
  const safari = isSafariBrowser();

  const lightSrc = safari ? getSafariSrc(logo.src) : logo.src;
  const darkSrc = logo.srcDark
    ? safari ? getSafariSrc(logo.srcDark) : logo.srcDark
    : lightSrc;

  const sources = {
    light: useBaseUrl(lightSrc),
    dark: useBaseUrl(darkSrc),
  };

  const themedImage = (
    <ThemedImage
      className={logo.className}
      sources={sources}
      height={logo.height}
      width={logo.width}
      alt={alt}
      style={logo.style}
    />
  );

  return imageClassName ? (
    <div className={imageClassName}>{themedImage}</div>
  ) : (
    themedImage
  );
}

export default function Logo(props: Props): ReactNode {
  const {
    siteConfig: { title },
  } = useDocusaurusContext();
  const {
    navbar: { title: navbarTitle, logo },
  } = useThemeConfig();

  const { imageClassName, titleClassName, ...propsRest } = props;
  const logoLink = useBaseUrl(logo?.href || '/');

  const fallbackAlt = navbarTitle ? '' : title;
  const alt = logo?.alt ?? fallbackAlt;

  return (
    <Link
      to={logoLink}
      {...propsRest}
      {...(logo?.target && { target: logo.target })}>
      {logo && (
        <LogoThemedImage
          logo={logo}
          alt={alt}
          imageClassName={imageClassName}
        />
      )}
      {navbarTitle != null && <b className={titleClassName}>{navbarTitle}</b>}
    </Link>
  );
}
