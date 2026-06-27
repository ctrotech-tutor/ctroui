# ctroui

[![npm version](https://img.shields.io/npm/v/ctroui?style=flat-square)](https://www.npmjs.com/package/ctroui)
[![License](https://img.shields.io/npm/l/ctroui?style=flat-square)](https://github.com/ctrotech-tutor/ctroui/blob/main/LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/ctroui?style=flat-square)](https://www.npmjs.com/package/ctroui)

React UI library built on [Radix UI](https://radix-ui.com) + [Tailwind CSS](https://tailwindcss.com) — accessible, composable, themeable components for modern React apps.

## Installation

```bash
npm install ctroui
```

## Setup

Import the base styles in your global CSS:

```css
@import "ctroui/styles";
```

### Tailwind CSS v4

If using Tailwind CSS v4, the styles are CSS-native with `@theme` directives. Import the stylesheet and the variables will be available.

### Tailwind CSS v3

For Tailwind CSS v3, configure your `tailwind.config.js` to resolve the package's CSS:

```js
// tailwind.config.js
module.exports = {
  content: ["./node_modules/ctroui/dist/**/*.{js,cjs}"],
  plugins: [],
}
```

## Usage

### Barrel import (tree-shakeable)

```tsx
import { Button, Dialog, Tooltip } from "ctroui"
```

### Subpath imports (explicit)

```tsx
import { Button } from "ctroui/button"
import { Dialog } from "ctroui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "ctroui/tooltip"
```

## Components

### Core

| Component | Sub-exports |
|-----------|-------------|
| Badge | `Badge` |
| Button | `Button` |
| Card | `Card`, `CardHeader`, `CardContent`, `CardFooter`, `CardTitle`, `CardDescription` |
| Input | `Input` |
| Label | `Label` |
| Separator | `Separator` |
| Skeleton | `Skeleton` |
| Switch | `Switch` |
| Tabs | `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` |

### Interactive

| Component | Sub-exports |
|-----------|-------------|
| Dialog | `Dialog`, `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogFooter`, `DialogTitle`, `DialogDescription`, `DialogClose`, `DialogOverlay`, `DialogPortal` |
| DropdownMenu | `DropdownMenu`, `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuItem`, `DropdownMenuCheckboxItem`, `DropdownMenuRadioItem`, `DropdownMenuLabel`, `DropdownMenuSeparator`, `DropdownMenuShortcut`, `DropdownMenuGroup`, `DropdownMenuPortal`, `DropdownMenuSub`, `DropdownMenuSubContent`, `DropdownMenuSubTrigger`, `DropdownMenuRadioGroup` |
| Popover | `Popover`, `PopoverTrigger`, `PopoverContent`, `PopoverClose` |
| Select | `Select`, `SelectTrigger`, `SelectContent`, `SelectItem`, `SelectGroup`, `SelectLabel`, `SelectSeparator`, `SelectValue` |
| Tooltip | `Tooltip`, `TooltipProvider`, `TooltipTrigger`, `TooltipContent` |

### Composite

| Component | Description |
|-----------|-------------|
| ConfirmDialog | Dialog + Button for confirmation prompts |
| CommandPalette | Searchable command palette with keyboard navigation |
| DataTable | Generic typed data table with custom cell renderers |
| FormField | Label + input + error state wrapper |
| MultiSelect | Popover-based multi-select with search and tags |

## Customization

All components accept a `className` prop for custom styling via Tailwind utilities or custom CSS.

CSS variables are used for theming — override `--background`, `--foreground`, `--primary`, `--ring`, etc. in your stylesheet to customize the design system.

## Subpath Exports

Every component can be imported individually for optimal tree-shaking:

```tsx
// Barrel
import { Button } from "ctroui"

// Subpath
import { Button } from "ctroui/button"

// Styles
import "ctroui/styles"
```

## Development

```bash
npm install
npm run build
npm run test
npm run typecheck
npm run lint
```

## License

MIT &copy; ctrotech
