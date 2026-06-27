# Phase 4 — Utility Components (v0.3.0)

## Goal
Simple utility components. Separator, Skeleton, Switch, Tabs, Tooltip. These are smaller, focused components that round out the library.

## Components

| Component | Radix Primitive | Sub-exports |
|---|---|---|
| **Separator** | `@radix-ui/react-separator` | `Separator` |
| **Skeleton** | None (div with animation) | `Skeleton` |
| **Switch** | `@radix-ui/react-switch` | `Switch` |
| **Tabs** | `@radix-ui/react-tabs` | `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` |
| **Tooltip** | `@radix-ui/react-tooltip` | `TooltipProvider`, `Tooltip`, `TooltipTrigger`, `TooltipContent` |

## Notes

### Skeleton
```tsx
export const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />
)
```
No Radix dependency — pure CSS animation.

### Separator
Thin wrapper around `@radix-ui/react-separator` with orientation support.

### Switch
Radix Switch with thumb styling, `checked`/`onCheckedChange` API.

### Tabs
Compound component pattern (like Dialog) — `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`.

### Tooltip
Requires `TooltipProvider` at app root. Export provider separately.

## Dependencies Added
- `@radix-ui/react-separator`
- `@radix-ui/react-switch`
- `@radix-ui/react-tabs`
- `@radix-ui/react-tooltip`

## Tests
- Basic render tests for each
- Skeleton: renders with className override
- Switch: toggles state
- Tabs: switches content on trigger click
- Tooltip: shows/hides on hover
