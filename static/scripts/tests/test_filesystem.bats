#!/usr/bin/env bats
# Filesystem tests: personalize_file, append_shell_shortcut.

load 'support/load'

setup()    { setup_bootstrap; }
teardown() { teardown_bootstrap; }

# --- personalize_file -----------------------------------------------------

@test "personalize_file replaces OWNER_NAME placeholder" {
  local f="$TEST_TMP/AGENTS.md"
  printf 'Hello, {{OWNER_NAME}}!\n' > "$f"
  personalize_file "$f" "Sarah Chen" "my-jarvis"
  grep -qF "Hello, Sarah Chen!" "$f"
}

@test "personalize_file replaces WORKSPACE_NAME placeholder" {
  local f="$TEST_TMP/README.md"
  printf 'Workspace: {{WORKSPACE_NAME}}\n' > "$f"
  personalize_file "$f" "Sarah" "my-jarvis"
  grep -qF "Workspace: my-jarvis" "$f"
}

@test "personalize_file replaces both placeholders" {
  local f="$TEST_TMP/AGENTS.md"
  printf '{{OWNER_NAME}} operates {{WORKSPACE_NAME}}\n' > "$f"
  personalize_file "$f" "Sarah" "my-jarvis"
  grep -qF "Sarah operates my-jarvis" "$f"
}

@test "personalize_file replaces repeated placeholders" {
  local f="$TEST_TMP/AGENTS.md"
  printf '{{OWNER_NAME}} and {{OWNER_NAME}}\n' > "$f"
  personalize_file "$f" "Sarah" "ws"
  local count
  count=$(grep -o "Sarah" "$f" | wc -l | tr -d ' ')
  [ "$count" = "2" ]
}

@test "personalize_file is a no-op when file does not exist" {
  run personalize_file "$TEST_TMP/does-not-exist.md" "Sarah" "ws"
  [ "$status" -eq 0 ]
}

@test "personalize_file leaves files without placeholders unchanged" {
  local f="$TEST_TMP/plain.md"
  printf 'No placeholders here.\n' > "$f"
  personalize_file "$f" "Sarah" "ws"
  grep -qF "No placeholders here." "$f"
}

@test "personalize_file preserves file content with special chars" {
  local f="$TEST_TMP/file.md"
  printf 'path: /usr/local/bin & env[X]=Y\n{{OWNER_NAME}}\n' > "$f"
  personalize_file "$f" "Sarah" "ws"
  grep -qF "path: /usr/local/bin & env[X]=Y" "$f"
  grep -qF "Sarah" "$f"
}

# --- append_shell_shortcut ------------------------------------------------

@test "append_shell_shortcut creates marker + function in fresh rc" {
  local rc="$HOME/.zshrc"
  append_shell_shortcut "$rc"
  grep -qF "# supersuit-up:clauded" "$rc"
  grep -qF "clauded()" "$rc"
}

@test "append_shell_shortcut is idempotent" {
  local rc="$HOME/.zshrc"
  append_shell_shortcut "$rc"
  append_shell_shortcut "$rc"
  local count
  count=$(grep -c "# supersuit-up:clauded" "$rc")
  [ "$count" = "1" ]
}

@test "append_shell_shortcut preserves existing rc content" {
  local rc="$HOME/.zshrc"
  printf 'export EXISTING=1\nalias foo=bar\n' > "$rc"
  append_shell_shortcut "$rc"
  grep -qF "export EXISTING=1" "$rc"
  grep -qF "alias foo=bar" "$rc"
  grep -qF "clauded()" "$rc"
}

@test "append_shell_shortcut creates rc if missing" {
  local rc="$HOME/.zshrc"
  [ ! -f "$rc" ]
  append_shell_shortcut "$rc"
  [ -f "$rc" ]
  grep -qF "clauded()" "$rc"
}
