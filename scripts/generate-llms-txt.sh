#!/bin/bash
# Generate llms.txt and llms-full.txt for AI agent crawling
# llms.txt = index with titles, URLs, and descriptions
# llms-full.txt = full content of every page concatenated
#
# Runs as part of prebuild. Output goes to static/ so Docusaurus serves them at root.

set -euo pipefail

DOCS_DIR="docs"
STATIC_DIR="static"
BASE_URL="https://docs.appliedaisociety.org/docs"
LLMS_TXT="$STATIC_DIR/llms.txt"
LLMS_FULL="$STATIC_DIR/llms-full.txt"

# Header for llms.txt
cat > "$LLMS_TXT" << 'EOF'
# Applied AI Society Documentation

> Public documentation for the Applied AI Society: playbooks, philosophy, concepts, roles, and frameworks for the applied AI economy.

## Docs

EOF

# Header for llms-full.txt
cat > "$LLMS_FULL" << 'EOF'
# Applied AI Society Documentation — Full Content

> This file contains the full text of every page in the Applied AI Society docs.
> Generated automatically at build time.

EOF

# Find all markdown files, sort for deterministic output
find "$DOCS_DIR" -name "*.md" -o -name "*.mdx" | sort | while read -r file; do
  # Extract title from frontmatter
  title=$(grep -m1 '^title:' "$file" 2>/dev/null | sed 's/^title:[[:space:]]*//' | sed 's/^"//' | sed 's/"$//' || echo "")

  # Fall back to first H1 if no frontmatter title
  if [ -z "$title" ]; then
    title=$(grep -m1 '^# ' "$file" 2>/dev/null | sed 's/^# //' || echo "")
  fi

  # Skip if no title found
  if [ -z "$title" ]; then
    continue
  fi

  # Build URL path from file path
  # docs/playbooks/business-owner/quick-check.md -> playbooks/business-owner/quick-check
  url_path=$(echo "$file" | sed 's|^docs/||' | sed 's|\.mdx$||' | sed 's|\.md$||' | sed 's|/index$||')
  url="$BASE_URL/$url_path"

  # Extract description from frontmatter or first paragraph
  description=$(grep -m1 '^description:' "$file" 2>/dev/null | sed 's/^description:[[:space:]]*//' | sed 's/^"//' | sed 's/"$//' || echo "")

  # Write to llms.txt index
  if [ -n "$description" ]; then
    echo "- [$title]($url): $description" >> "$LLMS_TXT"
  else
    echo "- [$title]($url)" >> "$LLMS_TXT"
  fi

  # Write full content to llms-full.txt
  echo "---" >> "$LLMS_FULL"
  echo "# $title" >> "$LLMS_FULL"
  echo "URL: $url" >> "$LLMS_FULL"
  echo "" >> "$LLMS_FULL"
  # Strip frontmatter and output content
  awk '/^---$/{if(++c==2)next}c>=2' "$file" >> "$LLMS_FULL"
  echo "" >> "$LLMS_FULL"
  echo "" >> "$LLMS_FULL"
done

# Count pages
page_count=$(grep -c '^\- \[' "$LLMS_TXT" || echo 0)
echo "" >> "$LLMS_TXT"
echo "---" >> "$LLMS_TXT"
echo "Generated at build time. $page_count pages indexed." >> "$LLMS_TXT"

echo "Generated llms.txt ($page_count pages) and llms-full.txt"
