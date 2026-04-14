#!/usr/bin/env bats
# Preflight checks with mocked system commands.

load 'support/load'

setup()    { setup_bootstrap; }
teardown() { teardown_bootstrap; }

# --- check_platform -------------------------------------------------------

@test "check_platform passes on Darwin (current system)" {
  # Skip if not on Darwin (CI Linux will fail this, by design).
  if [[ "$(uname -s)" != "Darwin" ]]; then skip "not Darwin"; fi
  run check_platform
  [ "$status" -eq 0 ]
}

# --- check_macos_version --------------------------------------------------

@test "check_macos_version passes on macOS 14" {
  MOCK_MACOS_VERSION=14.2 run check_macos_version
  [ "$status" -eq 0 ]
  [[ "$output" == *"macOS 14.2 ok"* ]]
}

@test "check_macos_version warns on macOS 12" {
  MOCK_MACOS_VERSION=12.7 run check_macos_version
  [ "$status" -ne 0 ]
  [[ "$output" == *"older than recommended"* ]]
}

@test "check_macos_version passes on macOS 15" {
  MOCK_MACOS_VERSION=15.0 run check_macos_version
  [ "$status" -eq 0 ]
}

# --- check_disk_space -----------------------------------------------------

@test "check_disk_space passes with plenty free" {
  MOCK_DISK_GB=50 run check_disk_space
  [ "$status" -eq 0 ]
  [[ "$output" == *"50 GB free"* ]]
}

@test "check_disk_space fails below threshold" {
  MOCK_DISK_GB=2 run check_disk_space
  [ "$status" -ne 0 ]
  [[ "$output" == *"Only 2 GB free"* ]]
}

@test "check_disk_space fails at exactly threshold minus 1" {
  MIN_DISK_GB=5 MOCK_DISK_GB=4 run check_disk_space
  [ "$status" -ne 0 ]
}

@test "check_disk_space passes at exactly threshold" {
  MIN_DISK_GB=5 MOCK_DISK_GB=5 run check_disk_space
  [ "$status" -eq 0 ]
}

# --- check_network --------------------------------------------------------

@test "check_network passes when curl succeeds" {
  MOCK_NETWORK_FAIL=0 run check_network
  [ "$status" -eq 0 ]
}

@test "check_network fails when curl fails" {
  MOCK_NETWORK_FAIL=1 run check_network
  [ "$status" -ne 0 ]
  [[ "$output" == *"Cannot reach github.com"* ]]
}

# --- check_sudo -----------------------------------------------------------

@test "check_sudo passes when sudo -v succeeds" {
  MOCK_SUDO_FAIL=0 run check_sudo
  [ "$status" -eq 0 ]
}

@test "check_sudo fails when sudo -v fails" {
  MOCK_SUDO_FAIL=1 run check_sudo
  [ "$status" -ne 0 ]
  [[ "$output" == *"sudo access required"* ]]
}

# --- load_homebrew_env ----------------------------------------------------

@test "load_homebrew_env no-ops when neither brew path exists" {
  run load_homebrew_env
  [ "$status" -eq 0 ]
}
