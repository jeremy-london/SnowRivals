#!/usr/bin/env bash

# Update project dependencies and bump the package minor version.
# Usage: ./update-deps.sh [--dry-run]

set -uo pipefail

ROOT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR" || exit 1

DRY_RUN=0
if [[ "${1:-}" == "--dry-run" ]]; then
  DRY_RUN=1
elif [[ $# -gt 0 ]]; then
  echo "Usage: $0 [--dry-run]" >&2
  exit 2
fi

if [[ ! -f package.json ]]; then
  echo "✖ package.json was not found in $ROOT_DIR" >&2
  exit 1
fi

if [[ ! -t 1 ]]; then
  RED=''; GREEN=''; YELLOW=''; BLUE=''; DIM=''; RESET=''
else
  RED=$'\033[31m'; GREEN=$'\033[32m'; YELLOW=$'\033[33m'
  BLUE=$'\033[36m'; DIM=$'\033[2m'; RESET=$'\033[0m'
fi

ok()   { printf '%s✔%s %s\n' "$GREEN" "$RESET" "$*"; }
info() { printf '%s•%s %s\n' "$BLUE" "$RESET" "$*"; }
warn() { printf '%s⚠%s %s\n' "$YELLOW" "$RESET" "$*"; }
fail() { printf '%s✖%s %s\n' "$RED" "$RESET" "$*" >&2; }
run() {
  if (( DRY_RUN )); then
    printf '%s%s$%s %q' "$DIM" "$BLUE" "$RESET" "$1"
    shift
    printf ' %q' "$@"
    printf '\n'
    return 0
  fi
  "$@"
}

printf '\n%sSnow Rivals · dependency refresh%s\n' "$BLUE" "$RESET"
printf '%s%s%s\n\n' "$DIM" "────────────────────────────────────────" "$RESET"

if ! command -v node >/dev/null 2>&1; then
  fail "Node.js is required."
  exit 1
fi

if ! node -e 'JSON.parse(require("fs").readFileSync("package.json", "utf8"))' >/dev/null 2>&1; then
  fail "package.json is not valid JSON. Fix it before updating dependencies."
  exit 1
fi
ok "package.json is valid"

if [[ ! -f pnpm-lock.yaml ]]; then
  fail "pnpm-lock.yaml was not found; this updater is intentionally pnpm-only."
  exit 1
fi

PM=pnpm
INSTALL_CMD=(pnpm install)
UPDATE_CMD=(pnpm update --latest)
VERSION_CMD=(pnpm version minor --no-git-tag-version)

if ! command -v "$PM" >/dev/null 2>&1; then
  fail "$PM is required for this project but was not found on PATH."
  exit 1
fi
info "Using $PM"

printf '\n%s1/3 · bump package version%s\n' "$BLUE" "$RESET"
if run "${VERSION_CMD[@]}"; then
  if (( DRY_RUN )); then
    ok "Would bump the minor version"
  else
    NEW_VERSION="$(node -p 'require("./package.json").version')"
    ok "Version is now $NEW_VERSION"
  fi
else
  fail "Could not bump the package minor version."
  exit 1
fi

printf '\n%s2/3 · update dependencies to latest%s\n' "$BLUE" "$RESET"
if run "${UPDATE_CMD[@]}"; then
  ok "Dependency manifests and lockfile updated"
else
  fail "Dependency update failed. The install step was not attempted."
  exit 1
fi

printf '\n%s3/3 · install and run package scripts%s\n' "$BLUE" "$RESET"
INSTALL_LOG="$(mktemp "${TMPDIR:-/tmp}/snow-rivals-install.XXXXXX")"
trap 'rm -f "$INSTALL_LOG"' EXIT

if (( DRY_RUN )); then
  run "${INSTALL_CMD[@]}"
  if [[ "$PM" == pnpm ]]; then
    info "If pnpm reports ignored build scripts, run: pnpm approve-builds"
  fi
  ok "Dry run complete"
  exit 0
fi

if "${INSTALL_CMD[@]}" 2>&1 | tee "$INSTALL_LOG"; then
  ok "Dependencies installed"
else
  fail "Install failed. See the output above."
  exit 1
fi

if [[ "$PM" == pnpm ]] && grep -qiE 'ignored build scripts|approve-builds' "$INSTALL_LOG"; then
  warn "pnpm found packages whose install scripts were blocked."
  if [[ -t 0 && -t 1 ]]; then
    read -r -p "Run pnpm approve-builds now? [Y/n] " APPROVE
    if [[ ! "$APPROVE" =~ ^[Nn]$ ]]; then
      if pnpm approve-builds; then
        if pnpm rebuild; then
          ok "Approved build scripts executed"
        else
          warn "Build scripts were approved, but pnpm rebuild failed."
        fi
      else
        warn "Build-script approval was not completed."
      fi
    else
      warn "Skipped build-script approval."
    fi
  else
    warn "Non-interactive shell: run 'pnpm approve-builds' when ready."
  fi
fi

printf '\n%s%s✓ Dependency refresh complete%s\n' "$GREEN" "$GREEN" "$RESET"
printf '%sReview package.json and the lockfile, then run your normal checks.%s\n\n' "$DIM" "$RESET"
