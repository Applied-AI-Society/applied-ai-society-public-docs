#!/usr/bin/env bats
# Workspace setup: clone, upstream unlink, personalize.

load 'support/load'

setup()    { setup_bootstrap; }
teardown() { teardown_bootstrap; }

# --- clone_starter --------------------------------------------------------

@test "clone_starter creates the target directory" {
  local target="$TEST_TMP/projects/my-jarvis"
  clone_starter "$target"
  [ -d "$target" ]
  assert_called "git clone"
}

@test "clone_starter creates parent directory if missing" {
  local target="$TEST_TMP/new-parent/my-jarvis"
  clone_starter "$target"
  [ -d "$(dirname "$target")" ]
}

# --- unlink_upstream_origin -----------------------------------------------

@test "unlink_upstream_origin removes upstream when matching" {
  local repo="$TEST_TMP/repo"
  mkdir -p "$repo"
  MOCK_GIT_HAS_UPSTREAM=1 unlink_upstream_origin "$repo"
  assert_called "git remote remove origin"
}

@test "unlink_upstream_origin does nothing when no upstream" {
  local repo="$TEST_TMP/repo"
  mkdir -p "$repo"
  MOCK_GIT_HAS_UPSTREAM=0 unlink_upstream_origin "$repo"
  assert_not_called "git remote remove origin"
}

# --- install_caps_lock_remap ----------------------------------------------

@test "install_caps_lock_remap calls hidutil" {
  install_caps_lock_remap
  assert_called "hidutil property --set"
}

@test "install_caps_lock_remap sends the correct key mapping" {
  install_caps_lock_remap
  # Caps Lock (0x700000039) -> Left Control (0x7000000E0)
  grep -qF "0x700000039" "$MOCK_CALL_LOG"
  grep -qF "0x7000000E0" "$MOCK_CALL_LOG"
}
