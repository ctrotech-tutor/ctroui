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

## Version History

| Version | Date | Notes |
|---------|------|-------|
| 0.1.0 | 2026-06-28 | Initial release — 19 component groups, 57 tests |
