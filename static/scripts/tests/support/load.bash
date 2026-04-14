# Common test setup. Sourced by every .bats file.
#
# Usage in a test file:
#
#   load 'support/load'
#
#   setup() { setup_bootstrap; }
#   teardown() { teardown_bootstrap; }

setup_bootstrap() {
  TEST_TMP="$(mktemp -d)"
  export TEST_TMP

  # Sandbox HOME and projects so we never touch the real filesystem.
  export HOME="$TEST_TMP/home"
  mkdir -p "$HOME"

  # Override constants that the script reads from env.
  export LOG_FILE="$TEST_TMP/bootstrap.log"
  export PROJECTS_DIR="$TEST_TMP/projects"
  export STARTER_REPO="$TEST_TMP/fake-starter.git"
  export MIN_NODE_MAJOR=20
  export MIN_DISK_GB=5
  export MIN_MACOS_MAJOR=13
  export VSCODE_APP_PATH="$TEST_TMP/VSCode.app"

  # Mock command log (each stub appends one line per invocation).
  export MOCK_CALL_LOG="$TEST_TMP/calls.log"
  : > "$MOCK_CALL_LOG"

  # Prepend mock-bin to PATH.
  export REAL_PATH="$PATH"
  export PATH="$BATS_TEST_DIRNAME/fixtures/mock-bin:$PATH"

  # Source the script under test. Strict mode is guarded to only run
  # when the script is invoked directly, so this is safe.
  # shellcheck disable=SC1091
  source "$BATS_TEST_DIRNAME/../bootstrap.sh"
}

teardown_bootstrap() {
  if [[ -n "${TEST_TMP:-}" && -d "$TEST_TMP" ]]; then
    rm -rf "$TEST_TMP"
  fi
}

# Helper: did a mocked command get called with the given args?
# Each line in the call log looks like:  brew install node
assert_called() {
  local expected="$*"
  grep -qF "$expected" "$MOCK_CALL_LOG"
}

assert_not_called() {
  local expected="$*"
  ! grep -qF "$expected" "$MOCK_CALL_LOG"
}
