import React, { type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useThemeConfig, type NavbarLogo } from '@docusaurus/theme-common';
import type { Props } from '@theme/Logo';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

function isSafariBrowser(): boolean {
  if (!ExecutionEnvironment.canUseDOM) return false;
  const ua = window.navigator.userAgent;
  return /Safari/.test(ua) && !/Chrome/.test(ua) && !/Chromium/.test(ua);
}

function getSafariSrc(src: string): string {
  return src.replace(/\.svg$/, '-safari.svg');
}

/**
 * Renders both light + dark logos and uses CSS to show the correct one.
 *
 * Pre-hydration (no data-theme on <html>): uses prefers-color-scheme media query.
 * Post-hydration: uses [data-theme='dark'] / [data-theme='light'] set by Docusaurus.
 *
 * This eliminates the flash-of-wrong-logo on fresh page load.
 */
function LogoImages({
  logo,
  alt,
  imageClassName,
}: {
  logo: NavbarLogo;
  alt: string;
  imageClassName?: string;
}) {
  const safari = isSafariBrowser();

  const lightSrc = useBaseUrl(safari ? getSafariSrc(logo.src) : logo.src);
  const darkSrc = useBaseUrl(
    logo.srcDark
      ? safari ? getSafariSrc(logo.srcDark) : logo.srcDark
      : logo.src
  );

  const imgs = (
    <>
      <style>{`
        .aais-logo-light { display: block; }
        .aais-logo-dark  { display: none;  }

        /* Pre-hydration: respect system preference */
        @media (prefers-color-scheme: dark) {
          html:not([data-theme]) .aais-logo-light { display: none;  }
          html:not([data-theme]) .aais-logo-dark  { display: block; }
        }

        /* Post-hydration: respect Docusaurus data-theme */
        [data-theme='dark']  .aais-logo-light { display: none;  }
        [data-theme='dark']  .aais-logo-dark  { display: block; }
        [data-theme='light'] .aais-logo-light { display: block; }
        [data-theme='light'] .aais-logo-dark  { display: none;  }
      `}</style>
      <img
        src={lightSrc}
        alt={alt}
        className={`aais-logo-light${logo.className ? ` ${logo.className}` : ''}`}
        height={logo.height}
        width={logo.width}
        style={logo.style}
      />
      <img
        src={darkSrc}
        alt=""
        aria-hidden="true"
        className={`aais-logo-dark${logo.className ? ` ${logo.className}` : ''}`}
        height={logo.height}
        width={logo.width}
        style={logo.style}
      />
    </>
  );

  return imageClassName ? <div className={imageClassName}>{imgs}</div> : <>{imgs}</>;
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
        <LogoImages
          logo={logo}
          alt={alt}
          imageClassName={imageClassName}
        />
      )}
      {navbarTitle != null && <b className={titleClassName}>{navbarTitle}</b>}
    </Link>
  );
}
