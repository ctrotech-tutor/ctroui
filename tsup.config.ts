import { defineConfig } from "tsup"

const components = [
  "button",
  "badge",
  "input",
  "label",
  "card",
  "dialog",
  "dropdown-menu",
  "select",
  "popover",
  "separator",
  "skeleton",
  "switch",
  "tabs",
  "tooltip",
  "confirm-dialog",
  "form-field",
  "data-table",
  "command-palette",
  "multi-select",
]

const external = [
  "react",
  "react-dom",
  "tailwindcss",
  "radix-ui",
  "lucide-react",
  "class-variance-authority",
  "clsx",
  "tailwind-merge",
]

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    sourcemap: true,
    external,
  },
  ...components.map((name) => ({
    entry: [`src/${name}/index.tsx`],
    format: ["esm", "cjs"] as const,
    dts: true,
    clean: false,
    sourcemap: true,
    external,
    outDir: `dist/${name}`,
  })),
])
