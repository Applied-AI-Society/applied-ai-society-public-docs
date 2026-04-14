#!/usr/bin/env bash
# Supersuit Up bootstrap script
# Version: v0.1 (2026-04-14)
# Platform: macOS (Apple Silicon + Intel). Linux and Windows coming in v0.2.
#
# What this does:
#   Takes a fresh Mac from zero to "Jarvis workspace cloned, Claude Code
#   installed, GitHub sync running" in ~15 minutes including OAuth pauses.
#
# What this does NOT do:
#   Install voice-to-text apps, Granola, or any GUI tool requiring
#   microphone/accessibility permissions. See the workshop doc:
#   https://docs.appliedaisociety.org/docs/workshops/supersuit-up
#
# Run:
#   curl -fsSL https://docs.appliedaisociety.org/scripts/bootstrap.sh -o bootstrap.sh
#   shasum -a 256 bootstrap.sh   # verify before running
#   bash bootstrap.sh
#
# Re-running is safe. Every step checks "is this already done?" first.

# Strict mode is applied only when run directly (see bottom of file),
# so sourcing from tests does not mutate the caller's shell options.

# -----------------------------------------------------------------------------
# Constants (overridable via env for testing)
# -----------------------------------------------------------------------------

VERSION="v0.1"
LOG_FILE="${LOG_FILE:-$HOME/.supersuit-bootstrap.log}"
STARTER_REPO="${STARTER_REPO:-https://github.com/Applied-AI-Society/minimum-viable-jarvis.git}"
PROJECTS_DIR="${PROJECTS_DIR:-$HOME/Documents/github-repos}"
MIN_NODE_MAJOR="${MIN_NODE_MAJOR:-20}"
MIN_DISK_GB="${MIN_DISK_GB:-5}"
MIN_MACOS_MAJOR="${MIN_MACOS_MAJOR:-13}"
VSCODE_APP_PATH="${VSCODE_APP_PATH:-/Applications/Visual Studio Code.app}"
DOCS_URL="https://docs.appliedaisociety.org/docs/workshops/supersuit-up"

# -----------------------------------------------------------------------------
# Output helpers
# -----------------------------------------------------------------------------

banner() { printf "\n==> %s\n" "$*"; }
info()   { printf "    %s\n" "$*"; }
warn()   { printf "    [warn] %s\n" "$*" >&2; }
err()    { printf "    [error] %s\n" "$*" >&2; }

pause() {
  local prompt="${1:-Press Enter to continue}"
  printf "\n    %s " "$prompt"
  read -r _
}

confirm() {
  local prompt="$1"
  local reply
  printf "    %s [y/N] " "$prompt"
  read -r reply
  [[ "$reply" =~ ^[Yy]$ ]]
}

# -----------------------------------------------------------------------------
# Input validation
# -----------------------------------------------------------------------------

# Accept only lowercase letters, digits, hyphens. Reject empty.
validate_workspace_name() {
  local name="${1:-}"
  [[ -n "$name" && "$name" =~ ^[a-z0-9][a-z0-9-]*$ ]]
}

# Parse node version output: "v22.5.0" -> "22". Returns 0 if unparseable.
node_major_version() {
  local v="${1:-}"
  if [[ "$v" =~ ^v?([0-9]+) ]]; then
    echo "${BASH_REMATCH[1]}"
  else
    echo 0
  fi
}

# Determine which shell rc file to modify.
pick_shell_rc() {
  case "${SHELL:-}" in
    */zsh)  echo "$HOME/.zshrc" ;;
    */bash) echo "$HOME/.bashrc" ;;
    *)      echo "$HOME/.zshrc" ;;
  esac
}

# -----------------------------------------------------------------------------
# Preflight checks
# -----------------------------------------------------------------------------

check_not_root() {
  if [[ "${EUID:-$(id -u)}" -eq 0 ]]; then
    err "Do not run this script as root."
    err "Run as your normal user. The script will sudo only when necessary."
    return 1
  fi
}

check_platform() {
  if [[ "$(uname -s)" != "Darwin" ]]; then
    err "v0.1 only supports macOS."
    err "For Linux/Windows, follow the manual steps at $DOCS_URL"
    return 1
  fi
}

check_macos_version() {
  local v major
  v="$(sw_vers -productVersion)"
  major="${v%%.*}"
  if (( major < MIN_MACOS_MAJOR )); then
    warn "macOS $v is older than recommended (${MIN_MACOS_MAJOR}.0+)."
    return 1
  fi
  info "macOS $v ok"
}

check_disk_space() {
  local avail
  avail=$(df -g / | awk 'NR==2 {print $4}')
  if (( avail < MIN_DISK_GB )); then
    err "Only ${avail} GB free on /. Need at least ${MIN_DISK_GB} GB."
    return 1
  fi
  info "Disk space: ${avail} GB free ok"
}

check_network() {
  if ! curl -fsS --max-time 10 https://github.com > /dev/null; then
    err "Cannot reach github.com. Check your network."
    return 1
  fi
  info "Network: github.com reachable ok"
}

check_sudo() {
  if ! sudo -v; then
    err "sudo access required. This script needs admin rights for Xcode CLT."
    return 1
  fi
  info "sudo ok"
}

# -----------------------------------------------------------------------------
# Tool installers (idempotent)
# -----------------------------------------------------------------------------

load_homebrew_env() {
  if [[ -x /opt/homebrew/bin/brew ]]; then
    eval "$(/opt/homebrew/bin/brew shellenv)"
  elif [[ -x /usr/local/bin/brew ]]; then
    eval "$(/usr/local/bin/brew shellenv)"
  fi
}

ensure_xcode_clt() {
  if xcode-select -p &>/dev/null; then
    info "Xcode CLT already installed"
    return 0
  fi
  info "Installing Xcode CLT (GUI dialog will appear; click Install)"
  xcode-select --install || true
  until xcode-select -p &>/dev/null; do sleep 10; done
  info "Xcode CLT installed ok"
}

ensure_homebrew() {
  if command -v brew &>/dev/null; then
    info "Homebrew already installed: $(brew --version | head -1)"
    return 0
  fi
  info "Installing Homebrew..."
  NONINTERACTIVE=1 /bin/bash -c \
    "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  load_homebrew_env
}

ensure_node() {
  if command -v node &>/dev/null; then
    local major
    major="$(node_major_version "$(node --version)")"
    if (( major >= MIN_NODE_MAJOR )); then
      info "Node already installed: $(node --version) ok"
      return 0
    fi
    warn "Node $(node --version) older than v${MIN_NODE_MAJOR}. Upgrading."
  fi
  brew install node
}

# Idempotent brew install for a CLI tool.
ensure_brew_tool() {
  local name="$1"
  if command -v "$name" &>/dev/null; then
    info "$name already installed"
    return 0
  fi
  brew install "$name"
}

ensure_vscode() {
  if [[ -d "$VSCODE_APP_PATH" ]]; then
    info "VS Code already installed"
    return 0
  fi
  brew install --cask visual-studio-code
}

ensure_claude_code() {
  if npm list -g --depth=0 2>/dev/null | grep -q "@anthropic-ai/claude-code"; then
    info "Claude Code installed. Upgrading to latest..."
    npm install -g @anthropic-ai/claude-code@latest
  else
    npm install -g @anthropic-ai/claude-code
  fi
}

# -----------------------------------------------------------------------------
# Workspace setup
# -----------------------------------------------------------------------------

clone_starter() {
  local target="$1"
  mkdir -p "$(dirname "$target")"
  git clone "$STARTER_REPO" "$target"
}

# Replace placeholders {{OWNER_NAME}} and {{WORKSPACE_NAME}} in a file.
personalize_file() {
  local path="$1" name="$2" workspace="$3"
  [[ -f "$path" ]] || return 0
  local tmp
  tmp="$(mktemp)"
  sed "s|{{OWNER_NAME}}|$name|g; s|{{WORKSPACE_NAME}}|$workspace|g" \
    "$path" > "$tmp"
  mv "$tmp" "$path"
}

unlink_upstream_origin() {
  local dir="$1"
  (
    cd "$dir"
    if git remote get-url origin 2>/dev/null | grep -q "minimum-viable-jarvis"; then
      git remote remove origin
      info "Unlinked upstream minimum-viable-jarvis origin"
    fi
  )
}

# -----------------------------------------------------------------------------
# Shell shortcut + Caps Lock
# -----------------------------------------------------------------------------

SHELL_SHORTCUT_MARKER="# supersuit-up:clauded"

append_shell_shortcut() {
  local rc="$1"
  if [[ -f "$rc" ]] && grep -qF "$SHELL_SHORTCUT_MARKER" "$rc"; then
    info "clauded shortcut already present in $rc"
    return 0
  fi
  cat >> "$rc" <<EOF

$SHELL_SHORTCUT_MARKER
clauded() { cd "\$1" && claude; }
EOF
  info "Added clauded shortcut to $rc"
}

install_caps_lock_remap() {
  # Caps Lock (0x700000039) -> Left Control (0x7000000E0).
  hidutil property --set \
    '{"UserKeyMapping":[{"HIDKeyboardModifierMappingSrc":0x700000039,"HIDKeyboardModifierMappingDst":0x7000000E0}]}' \
    > /dev/null
}

# -----------------------------------------------------------------------------
# Error trap
# -----------------------------------------------------------------------------

on_error() {
  local exit_code=$?
  local line=$1
  err ""
  err "Bootstrap failed at line $line (exit $exit_code)."
  err "Full log: $LOG_FILE"
  err ""
  err "Common fixes:"
  err "  - Corporate laptop with no admin? Try a personal machine."
  err "  - Network issue? Check that you can reach github.com."
  err "  - Disk full? Free up at least ${MIN_DISK_GB} GB."
  err "  - Wrong GitHub account? Run: gh auth logout, then re-run."
  err ""
  err "If stuck, paste the last ~50 lines of $LOG_FILE into Claude or"
  err "ChatGPT and ask for help."
  exit $exit_code
}

# -----------------------------------------------------------------------------
# Main
# -----------------------------------------------------------------------------

main() {
  set -euo pipefail
  exec > >(tee -a "$LOG_FILE") 2>&1
  trap 'on_error $LINENO' ERR

  banner "Supersuit Up bootstrap ($VERSION)"
  info "Log: $LOG_FILE"
  info "Started: $(date)"

  check_not_root
  check_platform
  check_macos_version || true   # warn-only; don't abort
  check_disk_space
  check_network
  check_sudo

  banner "Tell me who you are"

  local user_name="${NAME:-}"
  if [[ -z "$user_name" ]]; then
    printf "    What is your name? "
    read -r user_name
  fi

  local workspace_name="${WORKSPACE:-}"
  if [[ -z "$workspace_name" ]]; then
    info "Your workspace folder name. Lowercase, no spaces."
    info "Examples: sarah-command-center, apex-os, my-jarvis"
    printf "    Workspace name: "
    read -r workspace_name
  fi

  if ! validate_workspace_name "$workspace_name"; then
    err "Workspace name must be lowercase letters, digits, and hyphens only."
    exit 1
  fi

  local workspace_dir="$PROJECTS_DIR/$workspace_name"
  local skip_clone=0
  if [[ -d "$workspace_dir" ]]; then
    warn "$workspace_dir already exists."
    if confirm "Use the existing folder and skip the clone step?"; then
      skip_clone=1
    else
      err "Pick a different workspace name and re-run."
      exit 1
    fi
  fi

  info "Name: $user_name"
  info "Workspace: $workspace_dir"

  banner "Xcode Command Line Tools"
  ensure_xcode_clt

  banner "Homebrew"
  ensure_homebrew

  banner "Node.js"
  ensure_node

  banner "Git"
  ensure_brew_tool git

  banner "GitHub CLI"
  ensure_brew_tool gh

  banner "VS Code"
  ensure_vscode

  banner "Claude Code"
  ensure_claude_code

  banner "Verify toolchain"
  info "node:   $(node --version)"
  info "npm:    $(npm --version)"
  info "git:    $(git --version)"
  info "gh:     $(gh --version | head -1)"
  info "claude: $(claude --version 2>/dev/null || echo 'installed; run claude to authenticate')"

  banner "GitHub authentication"
  if gh auth status &>/dev/null; then
    local gh_user
    gh_user="$(gh api user --jq .login)"
    info "Already authenticated as: $gh_user"
    if ! confirm "Is this the right GitHub account for your Jarvis workspace?"; then
      info "Logging out and re-authenticating..."
      gh auth logout -h github.com || true
      gh auth login --web --git-protocol https
    fi
  else
    info "A browser will open. Log in with your GitHub account."
    gh auth login --web --git-protocol https
  fi

  banner "Clone starter repo"
  if (( skip_clone == 1 )); then
    info "Using existing folder at $workspace_dir (skipping clone)"
  else
    clone_starter "$workspace_dir"
    info "Cloned to $workspace_dir"
  fi

  banner "Personalize workspace"
  unlink_upstream_origin "$workspace_dir"
  personalize_file "$workspace_dir/AGENTS.md" "$user_name" "$workspace_name"
  personalize_file "$workspace_dir/README.md" "$user_name" "$workspace_name"
  info "Personalized AGENTS.md and README.md"

  banner "Push workspace to GitHub (private)"
  cd "$workspace_dir"
  if gh repo view "$workspace_name" &>/dev/null; then
    info "A repo named '$workspace_name' already exists on your GitHub."
    info "Skipping create. Rename workspace if you want a fresh one."
  else
    gh repo create "$workspace_name" --private --source . --push
    info "Created and pushed"
  fi

  banner "Install hourly sync cron"
  if [[ -f scripts/install-sync-cron.sh ]]; then
    bash scripts/install-sync-cron.sh
  else
    warn "scripts/install-sync-cron.sh not found. Skipping cron setup."
  fi

  banner "Install 'clauded' shell shortcut"
  append_shell_shortcut "$(pick_shell_rc)"

  local remap="${REMAP_CAPS:-}"
  if [[ -z "$remap" ]]; then
    banner "Optional: remap Caps Lock to Control?"
    info "Recommended for terminal-heavy work. Reversible in System Settings."
    if confirm "Remap now?"; then remap=1; fi
  fi
  if [[ "${remap:-0}" == "1" ]]; then
    install_caps_lock_remap
    info "Remapped for this session."
    info "Make permanent in: System Settings > Keyboard > Modifier Keys"
  fi

  banner "Authenticate Claude Code"
  info "Next, launch Claude Code for the first time to complete Anthropic auth."
  info "Run: cd $workspace_dir && claude"

  banner "Done"
  local gh_user
  gh_user="$(gh api user --jq .login 2>/dev/null || echo 'YOUR-GH-USER')"
  cat <<EOF

    Workspace: $workspace_dir
    GitHub:    https://github.com/$gh_user/$workspace_name
    Sync:      hourly cron installed (logs in .jarvis-sync.log)
    Shortcut:  'clauded $workspace_dir' (after sourcing your shell rc)

    Still manual (workshop Phase 0-1):
      - Voice-to-text: Superwhisper (https://superwhisper.com) or
                       Wispr Flow (https://wisprflow.ai)
      - Meeting transcription (optional): Granola (https://granola.ai)

    Next (workshop Phase 4):
      cd $workspace_dir
      claude
      Then follow the "Who Am I?" exercise in:
      $DOCS_URL

    Total time logged in: $SECONDS seconds
EOF
}

# Only run main when invoked directly. Sourcing for tests is a no-op.
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
  main "$@"
fi
