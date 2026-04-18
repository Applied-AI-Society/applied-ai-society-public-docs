import React, { type ComponentProps } from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Link from '@docusaurus/Link';

/**
 * Override for the markdown `<a>` element.
 *
 * Default: open every link in a new tab. Rationale: these docs are frequently
 * read alongside a terminal, a browser tab with a workshop, and external
 * tool references. Opening links in-place loses the reader's place.
 *
 * Exceptions:
 *   - Hash-only anchors (e.g. `#section`) stay in-page.
 *   - Internal `/docs/...` links still use the Docusaurus <Link> for
 *     prefetching and SPA semantics; we just add `target="_blank"`.
 */
function A(props: ComponentProps<'a'>) {
  const href = props.href ?? '';

  // Hash-only anchors must stay on the same page.
  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return (
    <Link
      {...(props as ComponentProps<typeof Link>)}
      target="_blank"
      rel="noopener noreferrer"
    />
  );
}

export default {
  ...MDXComponents,
  a: A,
};
