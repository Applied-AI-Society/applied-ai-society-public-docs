# Bootstrap script tests

Test suite for `../bootstrap.sh`. Uses [bats-core](https://github.com/bats-core/bats-core)
with mocked external commands (brew, npm, gh, node, git, curl, sudo, etc.).

## Run

```bash
cd tests
bash run.sh                       # full suite
bash run.sh test_validation.bats  # single file
bats test_installers.bats         # direct bats invocation
```

## Prerequisites

```bash
brew install bats-core             # required
brew install shellcheck            # optional static analysis
```

## Layout

```
tests/
├── run.sh                     # test runner (shellcheck + bats)
├── README.md                  # this file
├── support/
│   └── load.bash              # shared setup/teardown + assert helpers
├── fixtures/
│   └── mock-bin/              # stub scripts prepended to PATH
│       ├── brew
│       ├── claude
│       ├── curl
│       ├── df
│       ├── gh
│       ├── git
│       ├── hidutil
│       ├── node
│       ├── npm
│       ├── sudo
│       ├── sw_vers
│       └── xcode-select
├── test_validation.bats       # pure-logic helpers
├── test_filesystem.bats       # personalize_file, shell shortcut append
├── test_preflight.bats        # disk, network, macOS version, sudo
├── test_installers.bats       # idempotency of ensure_* functions
├── test_workspace.bats        # clone, upstream unlink, caps remap
└── test_smoke.bats            # source-safety, syntax, constants
```

## How the tests isolate from the real system

Every test calls `setup_bootstrap`, which:

1. Creates a fresh `$TEST_TMP` directory (mktemp).
2. Points `HOME`, `LOG_FILE`, `PROJECTS_DIR`, `STARTER_REPO`, and
   `VSCODE_APP_PATH` at locations inside `$TEST_TMP`.
3. Prepends `fixtures/mock-bin` to `PATH` so every external tool call
   goes through a controlled stub.
4. Sources `../bootstrap.sh`. `set -euo pipefail` is guarded to only
   fire when the script is invoked directly (not when sourced), so
   bats' own test harness stays intact.
5. Initializes `$MOCK_CALL_LOG`. Every mock stub appends one line
   per invocation to that log. Tests assert on it via
   `assert_called "brew install node"` or `assert_not_called ...`.

Teardown removes `$TEST_TMP`.

## Controlling mock behavior

Each stub reads environment variables to decide what to return. Set
them in the test body (or inline via `FOO=1 run func`).

| Stub | Variable | Effect |
|------|----------|--------|
| `brew` | `MOCK_BREW_FAIL=1` | every call exits 1 |
| `node` | `MOCK_NODE_VERSION=v20.1.0` | version reported by `node --version` |
| `npm` | `MOCK_NPM_CLAUDE_INSTALLED=1` | `npm list -g` shows Claude Code |
| `gh` | `MOCK_GH_AUTHED=1` | `gh auth status` succeeds |
| `gh` | `MOCK_GH_USER=foo` | `gh api user` returns this login |
| `gh` | `MOCK_GH_REPO_EXISTS=1` | `gh repo view` succeeds |
| `git` | `MOCK_GIT_HAS_UPSTREAM=1` | `git remote get-url origin` returns upstream URL |
| `xcode-select` | `MOCK_XCODE_INSTALLED=1` | `xcode-select -p` succeeds |
| `sw_vers` | `MOCK_MACOS_VERSION=14.2` | version returned |
| `df` | `MOCK_DISK_GB=50` | GB free on `/` |
| `curl` | `MOCK_NETWORK_FAIL=1` | curl exits 7 |
| `sudo` | `MOCK_SUDO_FAIL=1` | `sudo -v` fails |

## What is NOT tested

- End-to-end run of `main()`. That requires a fresh VM; see the spec's
  "Testing plan" section. These unit tests catch regressions in the
  individual pieces.
- Actual network, actual Homebrew install, actual GitHub API calls.
  All of these are behind mocks.
- The Xcode CLT install loop (it sleeps). Covered by manual VM runs.
- OAuth browser flows. Not automatable.

## Adding a new test

1. Pick the right file by topic. Add `test_<area>.bats` if none fits.
2. `load 'support/load'` at the top.
3. `setup() { setup_bootstrap; }` and `teardown() { teardown_bootstrap; }`.
4. For mocked behavior, set the env var inline: `MOCK_X=1 run my_func`.
5. Assert with `[ "$status" -eq 0 ]`, `[[ "$output" == *"..."* ]]`,
   or `assert_called "..."` / `assert_not_called "..."`.

## CI

Not wired up yet. Candidate GitHub Actions workflow:

```yaml
name: bootstrap-tests
on: { pull_request: { paths: [ "static/scripts/**" ] } }
jobs:
  test:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v4
      - run: brew install bats-core shellcheck
      - run: bash static/scripts/tests/run.sh
```
