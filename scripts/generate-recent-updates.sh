#!/bin/bash
# Auto-generate the recent updates JSON from git history.
# Finds the 4 most recently created or modified docs and extracts metadata.
# Output: src/data/recentUpdates.json (consumed by RecentlyUpdated component)

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
OUTPUT_DIR="$PROJECT_DIR/src/data"
OUTPUT_FILE="$OUTPUT_DIR/recentUpdates.json"

mkdir -p "$OUTPUT_DIR"

cd "$PROJECT_DIR"

# Get the 4 most recently changed doc files (by commit date, unique by file)
# Skip index files since they're category landing pages
recent_files=$(git log --diff-filter=ACMR --name-only --pretty=format:"%ai" -- 'docs/**/*.md' 'docs/**/*.mdx' \
  | awk '
    /^[0-9]{4}-/ { date=$1; next }
    /\.(md|mdx)$/ {
      if (!seen[$0]++ && !/\/index\.(md|mdx)$/) {
        print date "\t" $0
      }
    }
  ' \
  | head -4)

echo "[" > "$OUTPUT_FILE"
first=true

while IFS=$'\t' read -r date filepath; do
  [ -z "$filepath" ] && continue
  [ ! -f "$filepath" ] && continue

  # Extract title from frontmatter using awk
  title=$(awk '
    BEGIN { in_fm=0 }
    /^---$/ { in_fm++; next }
    in_fm == 1 && /^title:/ {
      sub(/^title:[[:space:]]*/, "")
      gsub(/^["'"'"']|["'"'"']$/, "")
      print
      exit
    }
    in_fm >= 2 { exit }
  ' "$filepath")
  [ -z "$title" ] && continue

  # Build the doc link path: docs/foo/bar.md -> /docs/foo/bar
  link="/${filepath%.md}"
  link="${link%.mdx}"

  # Determine tag: check if file was created or modified
  first_date=$(git log --diff-filter=A --follow --format="%ai" -- "$filepath" | tail -1 | cut -d' ' -f1)
  if [ "$first_date" = "$date" ]; then
    tag="New"
  else
    tag="Updated"
  fi

  # Extract first meaningful paragraph as summary
  summary=$(awk '
    BEGIN { in_fm=0 }
    /^---$/ { in_fm++; next }
    in_fm == 1 { next }
    /^$/ { next }
    /^#/ { next }
    /^\|/ { next }
    /^-/ { next }
    /^>/ { next }
    {
      # Remove markdown links, keeping just the text
      while (match($0, /\[[^\]]*\]\([^)]*\)/)) {
        prefix = substr($0, 1, RSTART-1)
        link_text = substr($0, RSTART+1)
        sub(/\].*/, "", link_text)
        suffix = substr($0, RSTART+RLENGTH)
        $0 = prefix link_text suffix
      }
      gsub(/[*_`~]/, "")
      if (length($0) > 20) { print; exit }
    }
  ' "$filepath")

  # Truncate summary
  if [ ${#summary} -gt 120 ]; then
    summary="${summary:0:117}..."
  fi

  if [ "$first" = true ]; then
    first=false
  else
    echo "," >> "$OUTPUT_FILE"
  fi

  # Escape quotes for JSON
  escaped_title=$(printf '%s' "$title" | sed 's/"/\\"/g')
  escaped_summary=$(printf '%s' "$summary" | sed 's/"/\\"/g')

  cat >> "$OUTPUT_FILE" <<ENTRY
  {
    "title": "$escaped_title",
    "link": "$link",
    "date": "$date",
    "summary": "$escaped_summary",
    "tag": "$tag"
  }
ENTRY

done <<< "$recent_files"

echo "]" >> "$OUTPUT_FILE"

echo "Generated recent updates: $(grep -c '"title"' "$OUTPUT_FILE") entries"
