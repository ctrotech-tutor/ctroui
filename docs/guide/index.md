# Getting Started

ctroui is a React UI library built on [Radix UI](https://radix-ui.com) + [Tailwind CSS](https://tailwindcss.com). It provides 60+ accessible, composable, and themeable components matching [shadcn/ui](https://ui.shadcn.com) v4 (New York style).

## Quick Start

```bash
npm install ctroui
```

### Basic Usage

```tsx
import { Button } from "ctroui"

function App() {
  return <Button>Hello ctroui</Button>
}
```

### Import Styles

In your global CSS file:

```css
@import "ctroui/styles";
```

Then add the CSS variables to your `:root`:

```css
@import "ctroui/styles";

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0.042 265.755);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.965 0.001 286.375);
  --secondary-foreground: oklch(0.205 0.042 265.755);
  --muted: oklch(0.965 0.001 286.375);
  --muted-foreground: oklch(0.556 0.011 286.375);
  --accent: oklch(0.965 0.001 286.375);
  --accent-foreground: oklch(0.205 0.042 265.755);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0.004 286.375);
  --input: oklch(0.922 0.004 286.375);
  --ring: oklch(0.205 0.042 265.755);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0.042 265.755);
  --secondary: oklch(0.269 0.015 286.375);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0.015 286.375);
  --muted-foreground: oklch(0.708 0.01 286.375);
  --accent: oklch(0.269 0.015 286.375);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.985 0 0);
  --border: oklch(0.269 0.015 286.375);
  --input: oklch(0.269 0.015 286.375);
  --ring: oklch(0.439 0.023 286.375);
}
```

## Import Patterns

```tsx
// Barrel import (tree-shakeable)
import { Button, Dialog, Tooltip } from "ctroui"

// Subpath import (explicit)
import { Button } from "ctroui/button"
import { Dialog } from "ctroui/dialog"
import { Tooltip } from "ctroui/tooltip"
```

## Next Steps

- Learn about [Installation](/guide/installation) in detail
- Explore [Theming](/guide/theming) options
- Browse the [Components](/components/core-ui) catalog
