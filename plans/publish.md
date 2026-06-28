# Publish Checklist

## Pre-publish

### 1. Version bump

```bash
# Patch (bug fixes)
npm version patch

# Minor (new features, backward-compatible)
npm version minor

# Major (breaking changes)
npm version major
```

### 2. Verify build

```bash
npm run build
```

Check that `dist/` contains:
- `index.js` + `index.cjs` (barrel entry)
- `index.d.ts` + `index.d.cts` (type declarations)
- `*/index.js` + `*/index.cjs` for each of the 19 components
- `*/index.d.ts` + `*/index.d.cts` for each component

### 3. Run checks

```bash
npm run typecheck     # TypeScript — no errors
npm run lint          # Biome — no errors
npm run test          # Vitest — all 57 tests passing
```

### 4. Verify package content

```bash
# Dry-run to see what files will be published
npm pack --dry-run
```

Expected output includes:
- `dist/` (all built files)
- `globals.css`
- `package.json`
- `README.md`
- `LICENSE` (if added)

Should NOT include:
- `src/`
- `tests/`
- `plans/`
- `.github/`
- config files (`tsconfig.json`, `tsup.config.ts`, `biome.json`, etc.)

### 5. Build verification (optional)

Create a test project and install from the tarball:

```bash
# Create tarball
npm pack

# In a test project
npm install ../ctroui/ctroui-0.1.0.tgz
```

## Publishing

```bash
npm publish
```

For scoped packages (if moved to `@ctrotech-tutor/ctroui`), ensure:

```json
{
  "publishConfig": {
    "access": "public"
  }
}
```

## Post-publish

### 1. Verify on npm

```bash
npm view ctroui
```

Check:
- Version matches
- Description
- Homepage URL (https://ctroui.vercel.app)
- Repository URL
- Keywords

### 2. Create GitHub release

```bash
# Tag the release
git tag v0.1.0
git push origin v0.1.0
```

Then create a release on GitHub from the tag with release notes summarizing changes.

### 3. Deploy docs site (future)

Deploy the documentation site to https://ctroui.vercel.app

## Trusted Publishing (CI/CD)

This repo is configured for **npm Trusted Publishing with OIDC** — no long-lived npm tokens required.

### Setup (one-time)

Since you've already run the first `npm publish` manually, the package exists on npm and you can now configure the Trusted Publisher:

1. Go to https://www.npmjs.com/settings/ctrotech-tutor/packages
2. Select `ctroui` → "Access" → "Publishers" tab
3. Click "Add Publisher" and configure:
   - **Provider**: GitHub
   - **Repository**: `ctrotech-tutor/ctroui`
   - **Workflow**: `.github/workflows/publish.yml`
4. Save

### Publishing a new version

1. Create a version tag and push:

   ```bash
   git tag v0.2.0
   git push origin v0.2.0
   ```

2. The workflow in `.github/workflows/publish.yml` will automatically:
   - Build and test
   - Publish to npm with `--provenance` (cryptographic source attestation)
   - No manual `npm publish` needed after setup

### Requirements

- Uses `ubuntu-latest` (GitHub-hosted — OIDC requires it)
- Node 24 (npm 11.5.1+ for provenance support)
- No `NODE_AUTH_TOKEN` set in the workflow (would block OIDC)

## Version History

| Version | Date | Notes |
|---------|------|-------|
| 0.1.0 | 2026-06-28 | Initial release — 19 component groups, 57 tests |
