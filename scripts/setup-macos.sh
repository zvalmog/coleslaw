#!/usr/bin/env zsh
set -euo pipefail

echo "Checking for npm..."
if command -v npm >/dev/null 2>&1; then
  echo "npm found: $(npm -v)"
  echo "Skipping Node installation."
else
  echo "npm not found. Installing Node via nvm..."

  # Ensure NVM_DIR has a safe default so `set -u` doesn't cause failures when we reference it
  export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"

  if command -v nvm >/dev/null 2>&1 || [ -s "$NVM_DIR/nvm.sh" ] || [ -d "$NVM_DIR" ]; then
    echo "nvm appears installed or nvm directory exists."
    # Try to source nvm from the standard locations (installer usually writes to $NVM_DIR)
    # shellcheck disable=SC1090
    if [ -s "$NVM_DIR/nvm.sh" ]; then
      . "$NVM_DIR/nvm.sh"
    else
      # If nvm is available on PATH, this will return immediately
      command -v nvm >/dev/null 2>&1 || true
    fi
  else
    echo "Installing nvm (https://github.com/nvm-sh/nvm)..."
    curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
    # shellcheck disable=SC1090
    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
  fi

  echo "Installing latest LTS Node and using it..."
  # Ensure nvm is sourced before using it
  # shellcheck disable=SC1090
  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" || true
  if command -v nvm >/dev/null 2>&1; then
    nvm install --lts
    nvm use --lts
  else
    echo "nvm is not available after install; please restart your shell or source your profile (e.g. ~/.zshrc) and re-run this script."
    exit 1
  fi
fi

echo "Node: $(node -v)  npm: $(npm -v)"

echo "Installing project dependencies (npm install)..."
npm install

echo "Setup complete. Start the dev server with: npm run dev"

echo "NOTE: You may need to open a new terminal session for nvm to be available, or source your profile (e.g. ~/.zshrc)."

# Persist nvm initialization to ~/.zshrc so new shells will have nvm/npm available.
ZSHRC="$HOME/.zshrc"
if [ -f "$ZSHRC" ]; then
  if ! grep -q "# nvm" "$ZSHRC" 2>/dev/null; then
    echo "Adding nvm initialization to $ZSHRC"
    printf '\n# nvm\nexport NVM_DIR="$HOME/.nvm"\n[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"\n' >> "$ZSHRC"
    echo "Appended nvm init to $ZSHRC. Restart your shell or run: source $ZSHRC"
  fi
fi

echo "You can also run './scripts/start.sh' (make executable first) which sources nvm and starts the dev server in this shell." 
