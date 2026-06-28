# Utilities

## Avatar

```tsx
import { Avatar, AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup, AvatarGroupCount } from "ctroui"
```

An avatar component with image, fallback initials, status badge, and group display.

```tsx
<Avatar>
  <AvatarImage src="https://github.com/username.png" alt="@username" />
  <AvatarFallback>JD</AvatarFallback>
  <AvatarBadge variant="success" />
</Avatar>

<AvatarGroup limit={3}>
  <Avatar><AvatarFallback>JD</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>CD</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>EF</AvatarFallback></Avatar>
  <AvatarGroupCount count={4} />
</AvatarGroup>
```

---

## ButtonGroup

```tsx
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText, buttonGroupVariants } from "ctroui"
```

A horizontal group of buttons with optional separators and text labels.

```tsx
<ButtonGroup orientation="horizontal">
  <Button>Left</Button>
  <Button>Center</Button>
  <Button>Right</Button>
</ButtonGroup>
```

---

## Command

```tsx
import { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator } from "ctroui"
```

A command palette / search component built on `cmdk` with dialog integration.

```tsx
<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <CalendarIcon />
        <span>Calendar</span>
      </CommandItem>
      <CommandItem>
        <SearchIcon />
        <span>Search</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Type a command..." />
  <CommandList>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup heading="Pages">
      <CommandItem onSelect={() => {}}>Home</CommandItem>
      <CommandItem onSelect={() => {}}>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>
```

Requires `cmdk` as a dependency.

---

## Direction

```tsx
import { DirectionProvider, useDirection } from "ctroui"
```

A utility for RTL/LTR direction support using Radix Direction provider.

```tsx
<DirectionProvider dir="rtl">
  <App />
</DirectionProvider>

function Component() {
  const direction = useDirection()
  // direction === "ltr" | "rtl"
}
```

---

## Accordion

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "ctroui"
"

An expandable accordion with animated content reveal.

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content for section 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>Content for section 2</AccordionContent>
  </AccordionItem>
</Accordion>
```

---

## Collapsible

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "ctroui"
"

A collapsible content panel with trigger.

```tsx
<Collapsible>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>
    <p>Collapsible content</p>
  </CollapsibleContent>
</Collapsible>
```

---

## ScrollArea

```tsx
import { ScrollArea, ScrollBar } from "ctroui"
"

A styled scroll area with custom scrollbar.

```tsx
<ScrollArea className="h-[200px]">
  <div className="p-4">
    Long content...
  </div>
  <ScrollBar orientation="vertical" />
</ScrollArea>
```

---

## Resizable

```tsx
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "ctroui"
"

A resizable panel layout system built on `react-resizable-panels`.

```tsx
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={50}>
    <div>Panel 1</div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div>Panel 2</div>
  </ResizablePanel>
</ResizablePanelGroup>
```

Requires `react-resizable-panels` as a dependency.

---

## Progress

```tsx
import { Progress } from "ctroui"
"

A progress bar indicator.

```tsx
<Progress value={33} />
<Progress value={66} />
<Progress value={100} />
```

---

## AspectRatio

```tsx
import { AspectRatio } from "ctroui"
"

A container that maintains a specific aspect ratio.

```tsx
<AspectRatio ratio={16 / 9}>
  <img src="..." alt="..." className="object-cover" />
</AspectRatio>
```

---

## cn

```tsx
import { cn } from "ctroui"
"

A utility function that combines `clsx` and `tailwind-merge` for class name management.

```tsx
cn("px-4 py-2", "px-6") // => "px-6 py-2" (later classes win)
cn("base-class", condition && "conditional-class")
```

---

## Legacy Components

These components are kept for backward compatibility. Prefer the modern alternatives for new projects.

| Legacy | Replacement |
|--------|-------------|
| `CommandPalette` | `Command` |
| `FormField` | `Field` or `Form` |

```tsx
// Old (still works)
import { CommandPalette } from "ctroui"
import { FormField } from "ctroui"

// New (recommended)
import { Command } from "ctroui"
import { Field } from "ctroui"
import { Form } from "ctroui"
```
