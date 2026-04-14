#!/usr/bin/env bats
# Smoke tests: sourcing does not trigger main(), constants are defined,
# bash syntax is valid.

load 'support/load'

setup()    { setup_bootstrap; }
teardown() { teardown_bootstrap; }

@test "script is valid bash syntax" {
  run bash -n "$BATS_TEST_DIRNAME/../bootstrap.sh"
  [ "$status" -eq 0 ]
}

@test "sourcing does not execute main()" {
  # If main() ran, we would see banners and a log file write.
  # Because load.bash already sourced the script, a clean log proves it.
  [ ! -s "$LOG_FILE" ] || [ "$(wc -l < "$LOG_FILE")" -eq 0 ]
}

@test "VERSION constant is defined" {
  [ -n "$VERSION" ]
}

@test "VERSION matches v0.1 pattern" {
  [[ "$VERSION" =~ ^v[0-9]+\.[0-9]+ ]]
}

@test "STARTER_REPO constant is defined" {
  [ -n "$STARTER_REPO" ]
}

@test "MIN_NODE_MAJOR is a positive integer" {
  [[ "$MIN_NODE_MAJOR" =~ ^[0-9]+$ ]]
  [ "$MIN_NODE_MAJOR" -gt 0 ]
}

@test "output helpers exist" {
  type banner >/dev/null
  type info >/dev/null
  type warn >/dev/null
  type err >/dev/null
}

@test "validation helpers exist" {
  type validate_workspace_name >/dev/null
  type node_major_version >/dev/null
  type pick_shell_rc >/dev/null
}

@test "installer functions exist" {
  type ensure_homebrew >/dev/null
  type ensure_node >/dev/null
  type ensure_claude_code >/dev/null
  type ensure_vscode >/dev/null
  type ensure_brew_tool >/dev/null
}

@test "main function exists" {
  type main >/dev/null
}

@test "environment overrides actually apply" {
  # load.bash sets these before sourcing; confirm they stuck.
  [[ "$LOG_FILE" == "$TEST_TMP/bootstrap.log" ]]
  [[ "$PROJECTS_DIR" == "$TEST_TMP/projects" ]]
  [[ "$VSCODE_APP_PATH" == "$TEST_TMP/VSCode.app" ]]
}
