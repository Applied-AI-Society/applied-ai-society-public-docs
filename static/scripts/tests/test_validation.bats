#!/usr/bin/env bats
# Pure-logic tests: no external commands, no filesystem side effects.

load 'support/load'

setup()    { setup_bootstrap; }
teardown() { teardown_bootstrap; }

# --- validate_workspace_name ---------------------------------------------

@test "validate_workspace_name accepts simple lowercase" {
  run validate_workspace_name "myjarvis"
  [ "$status" -eq 0 ]
}

@test "validate_workspace_name accepts hyphens" {
  run validate_workspace_name "sarah-command-center"
  [ "$status" -eq 0 ]
}

@test "validate_workspace_name accepts digits" {
  run validate_workspace_name "jarvis2026"
  [ "$status" -eq 0 ]
}

@test "validate_workspace_name rejects uppercase" {
  run validate_workspace_name "Sarah"
  [ "$status" -ne 0 ]
}

@test "validate_workspace_name rejects underscores" {
  run validate_workspace_name "sarah_center"
  [ "$status" -ne 0 ]
}

@test "validate_workspace_name rejects spaces" {
  run validate_workspace_name "sarah center"
  [ "$status" -ne 0 ]
}

@test "validate_workspace_name rejects empty string" {
  run validate_workspace_name ""
  [ "$status" -ne 0 ]
}

@test "validate_workspace_name rejects leading hyphen" {
  run validate_workspace_name "-bad"
  [ "$status" -ne 0 ]
}

@test "validate_workspace_name rejects path traversal" {
  run validate_workspace_name "../../etc"
  [ "$status" -ne 0 ]
}

# --- node_major_version ---------------------------------------------------

@test "node_major_version parses v-prefixed version" {
  result="$(node_major_version "v22.5.0")"
  [ "$result" = "22" ]
}

@test "node_major_version parses unprefixed version" {
  result="$(node_major_version "20.1.3")"
  [ "$result" = "20" ]
}

@test "node_major_version parses single-digit major" {
  result="$(node_major_version "v8.17.0")"
  [ "$result" = "8" ]
}

@test "node_major_version returns 0 for garbage" {
  result="$(node_major_version "garbage")"
  [ "$result" = "0" ]
}

@test "node_major_version returns 0 for empty" {
  result="$(node_major_version "")"
  [ "$result" = "0" ]
}

# --- pick_shell_rc --------------------------------------------------------

@test "pick_shell_rc returns zshrc for zsh shell" {
  SHELL=/bin/zsh result="$(pick_shell_rc)"
  [ "$result" = "$HOME/.zshrc" ]
}

@test "pick_shell_rc returns bashrc for bash shell" {
  SHELL=/bin/bash result="$(pick_shell_rc)"
  [ "$result" = "$HOME/.bashrc" ]
}

@test "pick_shell_rc defaults to zshrc for unknown shell" {
  SHELL=/bin/fish result="$(pick_shell_rc)"
  [ "$result" = "$HOME/.zshrc" ]
}

@test "pick_shell_rc handles unset SHELL" {
  unset SHELL
  result="$(pick_shell_rc)"
  [ "$result" = "$HOME/.zshrc" ]
}
