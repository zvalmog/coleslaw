#!/usr/bin/env zsh
set -euo pipefail

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" || true

echo "Starting dev server (this shell will have nvm/npm sourced)..."
npm run dev
