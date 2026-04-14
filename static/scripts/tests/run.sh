#!/usr/bin/env bash
# Run the bootstrap test suite.
#
#   bash tests/run.sh            # full suite
#   bash tests/run.sh test_validation.bats  # single file
#
# Requires: bats-core. Optional: shellcheck.

set -euo pipefail

cd "$(dirname "$0")"

if ! command -v bats &>/dev/null; then
  echo "bats is not installed."
  echo "  macOS:    brew install bats-core"
  echo "  Linux:    sudo apt install bats"
  exit 1
fi

echo "==> Shellcheck (optional)"
if command -v shellcheck &>/dev/null; then
  shellcheck ../bootstrap.sh
  echo "    shellcheck ok"
else
  echo "    shellcheck not installed; skipping"
  echo "    install with: brew install shellcheck"
fi

echo
echo "==> Bats"
if [[ $# -gt 0 ]]; then
  bats "$@"
else
  bats test_*.bats
fi
