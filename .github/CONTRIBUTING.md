# Contributing to ctroui

## Development

```bash
npm install
npm run build
npm run test
```

## Project Structure

- `src/<component>/index.tsx` — component source
- `tests/unit/<component>.test.tsx` — component tests
- `src/lib/utils.ts` — shared `cn()` utility
- `src/index.ts` — barrel exports

## Guidelines

1. Use `radix-ui` unified package for primitives, not individual `@radix-ui/*` packages.
2. Style components using `cva()` from `class-variance-authority`.
3. Use `cn()` from `src/lib/utils.ts` for className merging.
4. Components must accept and merge a `className` prop.
5. No Provider or theming DSL — customize via `className` + CSS variables.
6. Write tests for every component using Vitest + Testing Library.
7. Run `npm run lint:fix` and `npm run typecheck` before committing.

## Commit Convention

We use conventional commits: `feat:`, `fix:`, `chore:`, `docs:`, `test:`, `refactor:`.
