# Phase 2 — Core Components (v0.1.0)

## Goal
First 5 components — the essentials. Components match shadcn's API closely for familiar DX. Each in its own feature directory with barrel export. Tests for each.

## Components

| Component | File | Sub-exports | Notes |
|---|---|---|---|
| **Button** | `src/button/index.tsx` | `Button` | `variant`, `size`, `asChild`, forwardRef |
| **Badge** | `src/badge/index.tsx` | `Badge` | `variant`, `className` |
| **Input** | `src/input/index.tsx` | `Input` | forwardRef, error styling |
| **Label** | `src/label/index.tsx` | `Label` | Radix Label, forwardRef |
| **Card** | `src/card/index.tsx` | `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` |

## Pattern Per Component

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
```

## Barrel Export Updates

### src/index.ts
```ts
export { Button, type ButtonProps } from "./button"
export { Badge, type BadgeProps } from "./badge"
export { Input, type InputProps } from "./input"
export { Label, type LabelProps } from "./label"
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, type CardProps } from "./card"
```

### package.json exports (add)
```json
"./button": { "types": "./dist/button/index.d.ts", "import": "./dist/button/index.js", "require": "./dist/button/index.cjs" },
"./badge": { ... },
"./input": { ... },
"./label": { ... },
"./card": { ... }
```

## Tests
- `tests/unit/button.test.tsx` — renders, variant classes, asChild, className override
- `tests/unit/badge.test.tsx` — renders, variants
- `tests/unit/input.test.tsx` — renders, forwardRef, className
- `tests/unit/label.test.tsx` — renders, associates with input
- `tests/unit/card.test.tsx` — renders all sub-components

## Verification
- All tests pass
- Tree-shaking works (import only Button → only Button in bundle)
- `import { Button } from "ctroui"` resolves
- `import { Button } from "ctroui/button"` resolves
