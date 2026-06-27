# Phase 1 — Foundation & Scaffolding

## Goal
Project skeleton matching ctrodb conventions. Build pipeline working, barrel export structure in place, `cn()` utility, `globals.css`, and Tailwind preset.

## Files

```
ctroui/
├── package.json              # @ctrotech/ctroui, ESM, exports map, sideEffects: false
├── tsconfig.json             # Strict TS, verbatimModuleSyntax, bundler resolution
├── tsconfig.build.json       # extends tsconfig, noEmit, exclude tests
├── tsup.config.ts            # ESM + CJS + DTS, sourcemap, external react
├── biome.json                # 2-space, 100 width, double quotes, asNeeded semicolons
├── vitest.config.ts          # globals: true, environment: jsdom
├── .gitignore
├── .npmignore                # only dist/ + globals.css + README + LICENSE
├── LICENSE                   # MIT
├── globals.css               # CSS variables (shadcn-compatible tokens)
├── tailwind.config.ts        # ctroui Tailwind preset (maps CSS vars to utilities)
├── src/
│   ├── index.ts              # Barrel placeholder — re-exports all components
│   └── lib/
│       └── utils.ts          # cn() — clsx + tailwind-merge
└── tests/
    └── setup.ts              # Vitest setup (jsdom, etc.)
```

## Key Configurations

### package.json
- `"type": "module"`
- `"sideEffects": false`
- `"exports"` with `import` / `require` / `types` conditions
- `"files"`: `["dist", "globals.css", "README.md", "LICENSE"]`
- Scripts: `build`, `dev`, `test`, `typecheck`, `lint`, `format`
- Peer deps: `react`, `react-dom`, `tailwindcss`
- Runtime deps: `clsx`, `tailwind-merge`, `class-variance-authority`, `@radix-ui/react-slot`

### tsup.config.ts
```ts
import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  sourcemap: true,
  external: ["react", "react-dom", "tailwindcss"],
})
```

### globals.css
Define shadcn-compatible CSS variables:
- `--background`, `--foreground`
- `--primary`, `--primary-foreground`
- `--secondary`, `--secondary-foreground`
- `--muted`, `--muted-foreground`
- `--accent`, `--accent-foreground`
- `--destructive`, `--destructive-foreground`
- `--border`, `--input`, `--ring`
- `--radius`

### src/lib/utils.ts
```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## Verification
- `npm run build` — produces `dist/index.mjs`, `dist/index.cjs`, `dist/index.d.ts`
- `npm run typecheck` — no TS errors
- `npm run lint` — no Biome errors
