#!/bin/bash
# Check for docs that exist on disk but are not referenced in sidebars.ts
# Runs as a prebuild step to catch missing sidebar entries.

set -e

DOCS_DIR="$(cd "$(dirname "$0")/.." && pwd)/docs"
SIDEBARS_FILE="$(cd "$(dirname "$0")/.." && pwd)/sidebars.ts"

if [ ! -d "$DOCS_DIR" ] || [ ! -f "$SIDEBARS_FILE" ]; then
  echo "Could not find docs/ or sidebars.ts"
  exit 1
fi

MISSING=0

while IFS= read -r file; do
  # Get the doc ID (relative path without extension)
  rel="${file#$DOCS_DIR/}"
  doc_id="${rel%.*}"

  # index files are referenced by their parent path
  # e.g. docs/brand/index.md -> 'brand/index'
  # Check if the doc ID appears in sidebars.ts
  if ! grep -q "$doc_id" "$SIDEBARS_FILE"; then
    echo "WARNING: Doc not in sidebar: $rel"
    MISSING=$((MISSING + 1))
  fi
done < <(find "$DOCS_DIR" -name '*.md' -o -name '*.mdx' | sort)

if [ "$MISSING" -gt 0 ]; then
  echo ""
  echo "$MISSING doc(s) not referenced in sidebars.ts. Add them or they won't appear in navigation."
fi
