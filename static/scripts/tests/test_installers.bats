#!/usr/bin/env bats
# Idempotency tests for tool installers. Uses mocked brew/npm/node/etc.

load 'support/load'

setup()    { setup_bootstrap; }
teardown() { teardown_bootstrap; }

# --- ensure_xcode_clt -----------------------------------------------------

@test "ensure_xcode_clt skips when already installed" {
  MOCK_XCODE_INSTALLED=1 ensure_xcode_clt
  assert_not_called "xcode-select --install"
}

# We skip the "install" path because it loops with sleep. Covered manually.

# --- ensure_node ----------------------------------------------------------

@test "ensure_node skips when modern node is present" {
  MOCK_NODE_VERSION=v22.5.0 ensure_node
  assert_not_called "brew install node"
}

@test "ensure_node upgrades when node is too old" {
  MOCK_NODE_VERSION=v18.0.0 MIN_NODE_MAJOR=20 ensure_node
  assert_called "brew install node"
}

@test "ensure_node passes on exact minimum" {
  MOCK_NODE_VERSION=v20.0.0 MIN_NODE_MAJOR=20 ensure_node
  assert_not_called "brew install node"
}

# --- ensure_brew_tool -----------------------------------------------------

@test "ensure_brew_tool skips when tool is on PATH" {
  # git is already in the mock PATH, so command -v git succeeds.
  ensure_brew_tool git
  assert_not_called "brew install git"
}

@test "ensure_brew_tool installs when tool is missing" {
  # Make sure we look for something definitely not in mock-bin.
  run ensure_brew_tool "some-nonexistent-tool-xyz"
  assert_called "brew install some-nonexistent-tool-xyz"
}

# --- ensure_vscode --------------------------------------------------------

@test "ensure_vscode skips when app directory exists" {
  mkdir -p "$VSCODE_APP_PATH"
  ensure_vscode
  assert_not_called "brew install --cask visual-studio-code"
}

@test "ensure_vscode installs when app directory is missing" {
  [ ! -d "$VSCODE_APP_PATH" ]
  ensure_vscode
  assert_called "brew install --cask visual-studio-code"
}

# --- ensure_claude_code ---------------------------------------------------

@test "ensure_claude_code upgrades when already installed" {
  MOCK_NPM_CLAUDE_INSTALLED=1 ensure_claude_code
  assert_called "npm install -g @anthropic-ai/claude-code@latest"
}

@test "ensure_claude_code installs fresh when missing" {
  MOCK_NPM_CLAUDE_INSTALLED=0 ensure_claude_code
  assert_called "npm install -g @anthropic-ai/claude-code"
  assert_not_called "@anthropic-ai/claude-code@latest"
}

# --- ensure_homebrew ------------------------------------------------------

@test "ensure_homebrew skips when brew is on PATH" {
  ensure_homebrew
  # Should not have downloaded the installer via curl.
  assert_not_called "raw.githubusercontent.com/Homebrew"
}
