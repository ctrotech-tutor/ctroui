# Components Build Plan

## Status: 19 / 68 components done

We currently have 19 components. shadcn/ui lists ~68 components total. Below is the full gap analysis and build plan.

## Already Built (19)

```
Button       Badge        Input        Label        Card
Dialog       DropdownMenu Select       Popover      Separator
Skeleton     Switch       Tabs         Tooltip
ConfirmDialog FormField   DataTable    CommandPalette  MultiSelect
```

## Missing: 49 components

### Phase 1: Simple Radix Wrappers (no new deps) — 14 components

These are straightforward wrappers around Radix primitives from `radix-ui`, same pattern as Button/Dialog/etc. Each takes ~15min.

| # | Component | Radix Import | Notes |
|---|-----------|-------------|-------|
| 1 | Accordion | `Accordion` from radix-ui | Accordion.Root, Accordion.Item, Accordion.Header, Accordion.Trigger, Accordion.Content |
| 2 | Checkbox | `Checkbox` from radix-ui | Checkbox.Root + Checkbox.Indicator |
| 3 | Collapsible | `Collapsible` from radix-ui | Collapsible.Root, Collapsible.Trigger, Collapsible.Content |
| 4 | ContextMenu | `ContextMenu` from radix-ui | ContextMenu.Root, .Trigger, .Portal, .Content, .Item, etc |
| 5 | HoverCard | `HoverCard` from radix-ui | HoverCard.Root, .Trigger, .Portal, .Content |
| 6 | Menubar | `Menubar` from radix-ui | Menubar.Root, .Trigger, .Portal, .Content, .Item, etc |
| 7 | NavigationMenu | `NavigationMenu` from radix-ui | NavigationMenu.Root, .List, .Item, .Trigger, .Content, etc |
| 8 | Progress | `Progress` from radix-ui | Progress.Root + Progress.Indicator |
| 9 | RadioGroup | `RadioGroup` from radix-ui | RadioGroup.Root + RadioGroup.Item + RadioGroup.Indicator |
| 10 | ScrollArea | `ScrollArea` from radix-ui | ScrollArea.Root, .Viewport, .Scrollbar, .Thumb, .Corner |
| 11 | Slider | `Slider` from radix-ui | Slider.Root + Slider.Track + Slider.Range + Slider.Thumb |
| 12 | Toggle | `Toggle` from radix-ui | Toggle.Root |
| 13 | ToggleGroup | `ToggleGroup` from radix-ui | ToggleGroup.Root + ToggleGroup.Item |
| 14 | AspectRatio | `AspectRatio` from radix-ui | AspectRatio.Root |

### Phase 2: Pure CSS Components (no Radix, no deps) — 11 components

Simple HTML elements with Tailwind styling. Fast to build.

| # | Component | Description |
|---|-----------|-------------|
| 15 | Alert | Div with role="alert", variant states (default/destructive) |
| 16 | Breadcrumb | Nav with ol/li, separator styling |
| 17 | ButtonGroup | Flex container for grouped buttons |
| 18 | Empty | Placeholder state with icon/text |
| 19 | InputGroup | Input + adornment wrapper |
| 20 | Kbd | <kbd> element styling |
| 21 | NativeSelect | Styled <select> element |
| 22 | Pagination | Nav button group with page items |
| 23 | Spinner | CSS animation spinner |
| 24 | Table | Semantic <table> styling |
| 25 | Textarea | Styled <textarea> element |
| 26 | Typography | Prose-like className utilities |

### Phase 3: Composites Using Existing Components — 3 components

These build on components we already have.

| # | Component | Builds On | Notes |
|---|-----------|-----------|-------|
| 27 | AlertDialog | Dialog | Wraps Dialog with alert-dialog semantics, uses AlertDialog from radix-ui |
| 28 | Sheet | Dialog | Variant of Dialog (slides in from side). Import from radix-ui's Dialog primitive, custom styling |
| 29 | Field | Label + Input + Textarea | Forms field wrapper. shadcn's Field replaces our FormField — rename/align? |

### Phase 4: Components Needing New npm Dependencies — 8 components

These require `npm install <pkg>` before building.

| # | Component | New Dep(s) | Notes |
|---|-----------|-----------|-------|
| 30 | Calendar | `date-fns` | Inline calendar. Headless, uses date-fns for date math |
| 31 | Command | `cmdk` | Command palette input. cmdk provides the headless logic |
| 32 | Combobox | (uses Command + Popover) | Combobox = Command inside Popover |
| 33 | DatePicker | (uses Calendar + Popover) | DatePicker = Calendar inside Popover |
| 34 | InputOTP | `input-otp` | One-time password input |
| 35 | Carousel | `embla-carousel-react` | Embla is already a dep of radix-ui but needs explicit install |
| 36 | Sonner | `sonner` | Toast library. `toaster.tsx` wrapper |
| 37 | Toast | (uses Sonner) | `useToast` hook + Toaster component |

### Phase 5: Heavy Composites — 7 components

Complex, multi-file components with significant logic.

| # | Component | Dependencies | Notes |
|---|-----------|-------------|-------|
| 38 | Sidebar | Sheet, Tooltip, Collapsible, Separator, etc | Large composite (shadcn's sidebar is ~7 files) |
| 39 | Chart | `recharts` | Complex chart wrapper. Recharts + CSS variable theming |
| 40 | Resizable | `react-resizable-panels` | Panel layout system |
| 41 | Drawer | `vaul` | Drawer component (mobile-friendly dialog) |
| 42 | Avatar | Radix Avatar + fallback sizing | Simple Radix wrapper |
| 43 | Direction | Radix Direction | Direction provider |
| 44 | Item | Radix Collection | Item primitive for collection patterns |

### Phase 6: New Components (just announced) — 5 components

These are listed as "New" on shadcn's site. Need to study their patterns.

| # | Component | Notes |
|---|-----------|-------|
| 45 | Attachment | File attachment display |
| 46 | Bubble | Chat bubble component |
| 47 | Marker | Map marker / badge indicator |
| 48 | Message | Chat message component |
| 49 | MessageScroller | Auto-scrolling message list |

### Review/Removal Candidates

| Component | Action | Reason |
|-----------|--------|--------|
| FormField | ⚠️ Consider renaming to `Field` | shadcn renamed Field → this is now a top-level component. Our FormField does the same thing but different name |
| ConfirmDialog | ⚠️ Consider replacing with AlertDialog | shadcn uses AlertDialog for this pattern. ConfirmDialog is our custom composite |

## Summary

| Phase | Count | Est. Time |
|-------|-------|-----------|
| 1. Simple Radix Wrappers | 14 | ~3.5h |
| 2. Pure CSS Components | 12 | ~3h |
| 3. Composites (existing deps) | 3 | ~1.5h |
| 4. New npm deps | 8 | ~3h |
| 5. Heavy Composites | 7 | ~5h |
| 6. New Components | 5 | ~3h |
| **Total** | **49** | **~19h** |

## Recommended Build Order

1. **Phase 1 first** (14 Radix wrappers) — fast wins, same pattern as existing code
2. **Phase 2** (12 CSS components) — no deps needed, quick
3. **Phase 3** (3 composites) — builds on existing work
4. Install new deps, then Phase 4
5. Phase 5 (complex ones)
6. Phase 6 (new ones, study patterns)

## Dependencies to Install (in Phase 4)

```bash
npm install date-fns cmdk input-otp embla-carousel-react sonner
npm install recharts react-resizable-panels vaul
```
