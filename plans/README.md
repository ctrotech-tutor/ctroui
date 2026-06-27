# ctroui — Development Plans

## Overview
ctroui is a React component library built on Radix UI + Tailwind CSS, packaged as an installable npm package with clean barrel imports: `import { Button, Card, Dialog } from "ctroui"`.

## Phases

| # | Phase | Version |
|---|---|---|
| [01](01-phase-1-foundation.md) | Foundation & Scaffolding | — |
| [02](02-phase-2-core-components.md) | Core Components | v0.1.0 |
| [03](03-phase-3-interactive-components.md) | Interactive Components | v0.2.0 |
| [04](04-phase-4-utility-components.md) | Utility Components | v0.3.0 |
| [05](05-phase-5-composite-components.md) | Composite Components | v1.0.0 |

## Architecture Rules

| Rule | Detail |
|---|---|
| **Build** | tsup, ESM + CJS, DTS, sourcemaps |
| **Lint** | Biome (2-space, 100 width, double quotes, `asNeeded` semicolons) |
| **TypeScript** | Strict, `noUncheckedIndexedAccess`, `noUnusedLocals/Parameters`, `verbatimModuleSyntax` |
| **Exports** | `"type": "module"`, `"sideEffects": false`, barrel `index.ts` per feature, subpath exports in package.json |
| **Components** | Radix UI primitives + `cn()` + CVA variants + `forwardRef` + `asChild` |
| **Customization** | `className` prop + CSS variables only (no Provider, no theming DSL) |
| **Tests** | Vitest, `tests/unit/` directory |
| **Deps** | `clsx`, `tailwind-merge`, `class-variance-authority`, `@radix-ui/*` (runtime); `react`, `tailwindcss` (peer) |

## Adding a Component

1. Create `src/<component>/index.tsx`
2. Implement using Radix primitive + `cn()` + CVA
3. Export component + types
4. Add to `src/index.ts` barrel
5. Add subpath to `package.json` exports
6. Write tests in `tests/unit/<component>.test.tsx`
