# ctroui

[![npm version](https://img.shields.io/npm/v/ctroui?style=flat-square&logo=npm&color=2563eb)](https://www.npmjs.com/package/ctroui)
[![npm downloads](https://img.shields.io/npm/dm/ctroui?style=flat-square&color=7c3aed)](https://www.npmjs.com/package/ctroui)
[![License](https://img.shields.io/npm/l/ctroui?style=flat-square&color=059669)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Bundle](https://img.shields.io/badge/bundle-esm%20%7C%20cjs%20%7C%20dts-facc15?style=flat-square)](https://github.com/ctrotech-tutor/ctroui)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-16a34a?style=flat-square)](https://github.com/ctrotech-tutor/ctroui)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> **Accessible. Composable. Themeable.** A React UI library built on [Radix UI](https://radix-ui.com) + [Tailwind CSS](https://tailwindcss.com) with 60+ components matching [shadcn/ui](https://ui.shadcn.com) v4 (New York style).

---

## Features

- **60+ components** — buttons, dialogs, forms, data display, navigation, charts, sidebar, and more
- **Accessible by default** — built on Radix UI primitives with full ARIA support
- **Tree-shakeable** — barrel import or per-component subpath imports
- **Dark mode ready** — CSS-driven theming with `oklch()` color variables
- **TypeScript strict** — full type safety across all components
- **Customizable** — every component accepts `className`, all styles use CSS variables

---

## Installation

```bash
npm install ctroui
```

### Quick Start

```tsx
import { Button } from "ctroui"

function App() {
  return <Button>Hello ctroui</Button>
}
```

### Setup Styles

Import the base styles in your global CSS:

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
  /* ... see globals.css for all variables */
}
```

---

## Theming

ctroui uses CSS variables for theming — you have full control over the color palette. Override any variable in your own CSS to customize the look.

All colors use the `oklch()` color space for perceptual uniformity.

### How It Works

Import `ctroui/styles` to get the base CSS variables, then override them in your own stylesheet:

```css
@import "ctroui/styles";

:root {
  --primary: oklch(0.546 0.245 262.881);
  --radius: 0.5rem;
}

.dark {
  --background: oklch(0.141 0.005 285.823);
  --foreground: oklch(0.985 0 0);
}
```

### Theme Presets

ctroui ships with a **neutral** default theme (above). You can switch to any of these popular shadcn-compatible presets by copying the values into your CSS.

<details>
<summary><b>Zinc</b> — cool, modern grays</summary>

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.141 0.005 285.823);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.141 0.005 285.823);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.141 0.005 285.823);
  --primary: oklch(0.141 0.005 285.823);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.967 0.001 286.375);
  --secondary-foreground: oklch(0.141 0.005 285.823);
  --muted: oklch(0.967 0.001 286.375);
  --muted-foreground: oklch(0.552 0.016 285.938);
  --accent: oklch(0.967 0.001 286.375);
  --accent-foreground: oklch(0.141 0.005 285.823);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.92 0.004 286.375);
  --input: oklch(0.92 0.004 286.375);
  --ring: oklch(0.705 0.015 286.067);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.141 0.005 285.823);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.141 0.005 285.823);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.141 0.005 285.823);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.141 0.005 285.823);
  --secondary: oklch(0.274 0.006 286.033);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.274 0.006 286.033);
  --muted-foreground: oklch(0.705 0.015 286.067);
  --accent: oklch(0.274 0.006 286.033);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.985 0 0);
  --border: oklch(0.274 0.006 286.033);
  --input: oklch(0.274 0.006 286.033);
  --ring: oklch(0.442 0.017 285.786);
}
```
</details>

<details>
<summary><b>Slate</b> — blue-leaning grays</summary>

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.129 0.042 264.695);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.129 0.042 264.695);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.129 0.042 264.695);
  --primary: oklch(0.129 0.042 264.695);
  --primary-foreground: oklch(0.984 0.003 247.858);
  --secondary: oklch(0.968 0.007 247.896);
  --secondary-foreground: oklch(0.129 0.042 264.695);
  --muted: oklch(0.968 0.007 247.896);
  --muted-foreground: oklch(0.554 0.046 257.417);
  --accent: oklch(0.968 0.007 247.896);
  --accent-foreground: oklch(0.129 0.042 264.695);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.929 0.013 255.508);
  --input: oklch(0.929 0.013 255.508);
  --ring: oklch(0.704 0.04 256.788);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.129 0.042 264.695);
  --foreground: oklch(0.984 0.003 247.858);
  --card: oklch(0.129 0.042 264.695);
  --card-foreground: oklch(0.984 0.003 247.858);
  --popover: oklch(0.129 0.042 264.695);
  --popover-foreground: oklch(0.984 0.003 247.858);
  --primary: oklch(0.984 0.003 247.858);
  --primary-foreground: oklch(0.129 0.042 264.695);
  --secondary: oklch(0.279 0.041 260.031);
  --secondary-foreground: oklch(0.984 0.003 247.858);
  --muted: oklch(0.279 0.041 260.031);
  --muted-foreground: oklch(0.704 0.04 256.788);
  --accent: oklch(0.279 0.041 260.031);
  --accent-foreground: oklch(0.984 0.003 247.858);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.984 0.003 247.858);
  --border: oklch(0.279 0.041 260.031);
  --input: oklch(0.279 0.041 260.031);
  --ring: oklch(0.447 0.043 257.281);
}
```
</details>

<details>
<summary><b>Gray</b> — balanced, neutral grays</summary>

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.13 0.028 261.692);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.13 0.028 261.692);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.13 0.028 261.692);
  --primary: oklch(0.13 0.028 261.692);
  --primary-foreground: oklch(0.985 0.002 247.839);
  --secondary: oklch(0.967 0.003 264.542);
  --secondary-foreground: oklch(0.13 0.028 261.692);
  --muted: oklch(0.967 0.003 264.542);
  --muted-foreground: oklch(0.551 0.027 264.364);
  --accent: oklch(0.967 0.003 264.542);
  --accent-foreground: oklch(0.13 0.028 261.692);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.928 0.006 264.531);
  --input: oklch(0.928 0.006 264.531);
  --ring: oklch(0.707 0.022 261.325);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.13 0.028 261.692);
  --foreground: oklch(0.985 0.002 247.839);
  --card: oklch(0.13 0.028 261.692);
  --card-foreground: oklch(0.985 0.002 247.839);
  --popover: oklch(0.13 0.028 261.692);
  --popover-foreground: oklch(0.985 0.002 247.839);
  --primary: oklch(0.985 0.002 247.839);
  --primary-foreground: oklch(0.13 0.028 261.692);
  --secondary: oklch(0.273 0.016 285.238);
  --secondary-foreground: oklch(0.985 0.002 247.839);
  --muted: oklch(0.273 0.016 285.238);
  --muted-foreground: oklch(0.707 0.022 261.325);
  --accent: oklch(0.273 0.016 285.238);
  --accent-foreground: oklch(0.985 0.002 247.839);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.985 0.002 247.839);
  --border: oklch(0.273 0.016 285.238);
  --input: oklch(0.273 0.016 285.238);
  --ring: oklch(0.443 0.014 285.299);
}
```
</details>

<details>
<summary><b>Stone</b> — warm, earthy grays</summary>

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.147 0.004 49.25);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.147 0.004 49.25);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.147 0.004 49.25);
  --primary: oklch(0.147 0.004 49.25);
  --primary-foreground: oklch(0.985 0.001 106.423);
  --secondary: oklch(0.97 0.001 106.424);
  --secondary-foreground: oklch(0.147 0.004 49.25);
  --muted: oklch(0.97 0.001 106.424);
  --muted-foreground: oklch(0.553 0.013 58.071);
  --accent: oklch(0.97 0.001 106.424);
  --accent-foreground: oklch(0.147 0.004 49.25);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.923 0.003 48.717);
  --input: oklch(0.923 0.003 48.717);
  --ring: oklch(0.709 0.01 56.259);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.147 0.004 49.25);
  --foreground: oklch(0.985 0.001 106.423);
  --card: oklch(0.147 0.004 49.25);
  --card-foreground: oklch(0.985 0.001 106.423);
  --popover: oklch(0.147 0.004 49.25);
  --popover-foreground: oklch(0.985 0.001 106.423);
  --primary: oklch(0.985 0.001 106.423);
  --primary-foreground: oklch(0.147 0.004 49.25);
  --secondary: oklch(0.268 0.007 34.298);
  --secondary-foreground: oklch(0.985 0.001 106.423);
  --muted: oklch(0.268 0.007 34.298);
  --muted-foreground: oklch(0.709 0.01 56.259);
  --accent: oklch(0.268 0.007 34.298);
  --accent-foreground: oklch(0.985 0.001 106.423);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.985 0.001 106.423);
  --border: oklch(0.268 0.007 34.298);
  --input: oklch(0.268 0.007 34.298);
  --ring: oklch(0.443 0.011 73.639);
}
```
</details>

<details>
<summary><b>Red / Blue / Green / Orange / Rose / Violet</b> — colored accent themes</summary>

For accent themes, use the neutral/base grays (e.g. Zinc) and just override the accent colors:

```css
@import "ctroui/styles";

/* Zinc base + Rose accent */
:root {
  --primary: oklch(0.527 0.154 6.143);
  --ring: oklch(0.527 0.154 6.143);
}
```
</details>

You can also create your own custom theme by replacing the CSS variables with any `oklch()` values.

## Components

### Core UI

| Component | Sub-exports |
|-----------|-------------|
| **Button** | `Button`, `buttonVariants` |
| **Badge** | `Badge`, `badgeVariants` |
| **Card** | `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`, `CardAction` |
| **Input** | `Input` |
| **Label** | `Label` |
| **Separator** | `Separator` |
| **Skeleton** | `Skeleton` |
| **Switch** | `Switch` |
| **Textarea** | `Textarea` |
| **Kbd** | `Kbd`, `KbdGroup` |
| **Spinner** | `Spinner` |
| **Empty** | `Empty`, `EmptyMedia`, `EmptyHeader`, `EmptyTitle`, `EmptyDescription`, `EmptyContent` |
| **Item** | `Item`, `ItemMedia`, `ItemContent`, `ItemTitle`, `ItemDescription`, `ItemActions`, `ItemFooter`, `ItemGroup`, `ItemHeader`, `ItemSeparator` |

### Navigation

| Component | Sub-exports |
|-----------|-------------|
| **Tabs** | `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`, `tabsListVariants` |
| **Breadcrumb** | `Breadcrumb`, `BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbPage`, `BreadcrumbSeparator`, `BreadcrumbEllipsis` |
| **Pagination** | `Pagination`, `PaginationContent`, `PaginationItem`, `PaginationLink`, `PaginationPrevious`, `PaginationNext`, `PaginationEllipsis` |
| **Menubar** | `Menubar`, `MenubarMenu`, `MenubarTrigger`, `MenubarContent`, `MenubarItem`, `MenubarSeparator`, + submenu, checkbox, radio |
| **NavigationMenu** | `NavigationMenu`, `NavigationMenuList`, `NavigationMenuItem`, `NavigationMenuTrigger`, `NavigationMenuContent`, `NavigationMenuLink`, `NavigationMenuViewport`, `NavigationMenuIndicator` |
| **Sidebar** | `SidebarProvider`, `Sidebar`, `SidebarHeader`, `SidebarContent`, `SidebarFooter`, `SidebarGroup`, `SidebarGroupLabel`, `SidebarGroupContent`, `SidebarGroupAction`, `SidebarMenu`, `SidebarMenuItem`, `SidebarMenuButton`, `SidebarMenuAction`, `SidebarMenuBadge`, `SidebarMenuSkeleton`, `SidebarMenuSub`, `SidebarMenuSubButton`, `SidebarMenuSubItem`, `SidebarSeparator`, `SidebarTrigger`, `SidebarRail`, `SidebarInset`, `SidebarInput`, `useSidebar` |

### Overlay & Dialogs

| Component | Sub-exports |
|-----------|-------------|
| **Dialog** | `Dialog`, `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogFooter`, `DialogTitle`, `DialogDescription`, `DialogClose`, `DialogOverlay`, `DialogPortal` |
| **AlertDialog** | `AlertDialog`, `AlertDialogTrigger`, `AlertDialogContent`, `AlertDialogHeader`, `AlertDialogFooter`, `AlertDialogTitle`, `AlertDialogDescription`, `AlertDialogAction`, `AlertDialogCancel`, `AlertDialogOverlay`, `AlertDialogPortal`, `AlertDialogMedia` |
| **Sheet** | `Sheet`, `SheetTrigger`, `SheetContent`, `SheetHeader`, `SheetFooter`, `SheetTitle`, `SheetDescription`, `SheetClose`, `SheetOverlay`, `SheetPortal` |
| **Drawer** | `Drawer`, `DrawerTrigger`, `DrawerContent`, `DrawerHeader`, `DrawerFooter`, `DrawerTitle`, `DrawerDescription`, `DrawerClose`, `DrawerOverlay`, `DrawerPortal` |
| **Popover** | `Popover`, `PopoverTrigger`, `PopoverContent`, `PopoverAnchor`, `PopoverHeader`, `PopoverTitle`, `PopoverDescription` |
| **Tooltip** | `Tooltip`, `TooltipProvider`, `TooltipTrigger`, `TooltipContent` |
| **HoverCard** | `HoverCard`, `HoverCardTrigger`, `HoverCardContent` |

### Select & Input

| Component | Sub-exports |
|-----------|-------------|
| **Select** | `Select`, `SelectTrigger`, `SelectContent`, `SelectItem`, `SelectGroup`, `SelectLabel`, `SelectSeparator`, `SelectValue`, `SelectScrollUpButton`, `SelectScrollDownButton` |
| **DropdownMenu** | `DropdownMenu`, `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuItem`, `DropdownMenuCheckboxItem`, `DropdownMenuRadioItem`, `DropdownMenuLabel`, `DropdownMenuSeparator`, `DropdownMenuShortcut`, `DropdownMenuGroup`, `DropdownMenuPortal`, `DropdownMenuSub`, `DropdownMenuSubContent`, `DropdownMenuSubTrigger`, `DropdownMenuRadioGroup` |
| **ContextMenu** | `ContextMenu`, `ContextMenuTrigger`, `ContextMenuContent`, `ContextMenuItem`, `ContextMenuCheckboxItem`, `ContextMenuRadioItem`, `ContextMenuLabel`, `ContextMenuSeparator`, `ContextMenuShortcut`, `ContextMenuGroup`, `ContextMenuPortal`, `ContextMenuSub`, `ContextMenuSubContent`, `ContextMenuSubTrigger`, `ContextMenuRadioGroup` |
| **InputOTP** | `InputOTP`, `InputOTPGroup`, `InputOTPSlot`, `InputOTPSeparator` |
| **InputGroup** | `InputGroup`, `InputGroupInput`, `InputGroupTextarea`, `InputGroupAddon`, `InputGroupText`, `InputGroupButton` |
| **NativeSelect** | `NativeSelect`, `NativeSelectOption`, `NativeSelectOptGroup` |
| **MultiSelect** | `MultiSelect` |
| **Checkbox** | `Checkbox` |
| **RadioGroup** | `RadioGroup`, `RadioGroupItem` |
| **Toggle** | `Toggle`, `toggleVariants` |
| **ToggleGroup** | `ToggleGroup`, `ToggleGroupItem` |
| **Slider** | `Slider` |
| **Switch** | `Switch` |

### Layout

| Component | Sub-exports |
|-----------|-------------|
| **Accordion** | `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent` |
| **Collapsible** | `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent` |
| **ScrollArea** | `ScrollArea`, `ScrollBar` |
| **Resizable** | `ResizablePanelGroup`, `ResizablePanel`, `ResizableHandle` |
| **AspectRatio** | `AspectRatio` |
| **Progress** | `Progress` |

### Data Display

| Component | Sub-exports |
|-----------|-------------|
| **Table** | `Table`, `TableHeader`, `TableBody`, `TableFooter`, `TableHead`, `TableRow`, `TableCell`, `TableCaption` |
| **DataTable** | `DataTable` (generic typed table with custom cells) |
| **Alert** | `Alert`, `AlertTitle`, `AlertDescription` |
| **Chart** | `ChartContainer`, `ChartTooltip`, `ChartTooltipContent`, `ChartLegend`, `ChartLegendContent`, `ChartStyle` (recharts wrapper with auto-theming) |
| **Calendar** | `Calendar`, `CalendarDayButton` |
| **Carousel** | `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext` |

### Forms

| Component | Sub-exports |
|-----------|-------------|
| **Field** | `Field`, `FieldLabel`, `FieldContent`, `FieldTitle`, `FieldDescription`, `FieldError`, `FieldGroup`, `FieldSet`, `FieldLegend`, `FieldSeparator` |
| **Form** | `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormDescription`, `FormMessage`, `useFormField` (react-hook-form integration) |

### Utilities

| Component | Sub-exports |
|-----------|-------------|
| **ButtonGroup** | `ButtonGroup`, `ButtonGroupSeparator`, `ButtonGroupText`, `buttonGroupVariants` |
| **Avatar** | `Avatar`, `AvatarImage`, `AvatarFallback`, `AvatarBadge`, `AvatarGroup`, `AvatarGroupCount` |
| **Command** | `Command`, `CommandDialog`, `CommandInput`, `CommandList`, `CommandEmpty`, `CommandGroup`, `CommandItem`, `CommandShortcut`, `CommandSeparator` |
| **Direction** | `DirectionProvider`, `useDirection` |
| **Sonner** | `Toaster` |
| **Badge** | `Badge`, `badgeVariants` |
| **cn** | `cn` utility (clsx + tailwind-merge) |

### Legacy (Backward Compat)

| Component | Description |
|-----------|-------------|
| **ConfirmDialog** | Dialog + Button for confirmation prompts (prefer `AlertDialog`) |
| **CommandPalette** | Searchable command palette (prefer `Command`) |
| **FormField** | Simple label + input + error wrapper (prefer `Field` or `Form`) |

---

## Import Patterns

```tsx
// Barrel import (tree-shakeable)
import { Button, Dialog, Tooltip, SidebarProvider } from "ctroui"

// Subpath import (explicit)
import { Button } from "ctroui/button"
import { Dialog } from "ctroui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "ctroui/tooltip"
import { SidebarProvider, Sidebar, SidebarTrigger } from "ctroui/sidebar"
```

---

## Development

```bash
# Install
npm install

# Build all components
npm run build

# Type check
npm run typecheck

# Lint
npm run lint

# Test
npm test

# Watch mode
npm run dev
```

---

## Bundle Size

Each component is built as its own entry point (ESM + CJS + DTS). Import only what you need — unused components are tree-shaken away by modern bundlers.

| Import style | Bundled size |
|-------------|--------------|
| `import { Button } from "ctroui"` | ~1.5 kB |
| `import { Dialog, Popover, Tooltip } from "ctroui"` | ~5 kB |
| `import { Sidebar } from "ctroui"` | ~8 kB |
| `import { ChartContainer } from "ctroui"` | ~15 kB (recharts) |

---

## Contributing

PRs are welcome! If you find a bug or want a new component:

1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Run `npm run typecheck && npm run lint && npm test`
5. Open a PR

---

## License

MIT &copy; [ctrotech](https://github.com/ctrotech-tutor)
