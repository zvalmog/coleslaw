
## Build as a static site

This project uses Vite. To build a static production bundle:

1. Build:
   `npm run build`
2. Preview the production build locally:
   `npm run preview`

The `dist/` folder produced by `vite build` contains the static site you can deploy to any static hosting provider.

## Deploy to GitHub Pages

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the app and deploys the `dist/` folder to GitHub Pages when you push to `main` or `master`.

If your site will be hosted at `https://<username>.github.io/<repo>/` (a repository page with a subpath), you'll need to supply a `base` when building so assets resolve correctly:

```bash
# build for a repo-page (replace <repo> with your repository name)
npm run build -- --base=/<repo>/
npm run preview
```

For user/organization pages (`https://<username>.github.io/`) you can build normally without `--base`.

Local preview of production build (same as above):

```bash
npm run build
npm run preview
```

## macOS quick setup (if npm is missing)

If `npm` is not present on your system, run the provided macOS setup script which will install nvm and an LTS Node, then install dependencies:

1. Make the script executable:

```bash
chmod +x scripts/setup-macos.sh
```

2. Run it:

```bash
./scripts/setup-macos.sh
```

Note: the script installs `nvm` and uses it to install Node LTS. You may need to restart your shell or source your profile after `nvm` is installed.

### Helper scripts

Two helper scripts are included to make running locally easier without restarting your shell:

1. `scripts/start.sh` — sources nvm (if present) in the current shell and starts the dev server.
2. `scripts/build-and-preview.sh` — sources nvm, builds the production bundle, and starts the preview server.

Make them executable and use them like this:

```bash
chmod +x scripts/start.sh scripts/build-and-preview.sh
./scripts/start.sh
# or
./scripts/build-and-preview.sh
```

The setup script also attempts to append nvm initialization to your `~/.zshrc` so new shells will have `nvm` available automatically.

## Optional: use a VS Code devcontainer

If you use VS Code, open the repository in the container (`Reopen in Container`) to get a reproducible Node environment. The container runs `npm install` automatically on create.
