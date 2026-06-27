# ctroui

React UI library built on Radix UI + Tailwind CSS — accessible, composable, themeable components for modern React apps.

## Installation

```bash
npm install ctroui
```

## Usage

```tsx
import { Button } from "ctroui"

function App() {
  return <Button variant="primary">Click me</Button>
}
```

Import the base styles:

```css
@import "ctroui/styles";
```

## Components

### Core

- Badge
- Button
- Card (Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription)
- Input
- Label
- Separator
- Skeleton
- Switch
- Tabs (Tabs, TabsList, TabsTrigger, TabsContent)

### Interaction

- Dialog (Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose, DialogOverlay, DialogPortal)
- DropdownMenu (DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup)
- Popover (Popover, PopoverTrigger, PopoverContent, PopoverClose)
- Select (Select, SelectTrigger, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectSeparator, SelectValue)
- Tooltip (Tooltip, TooltipProvider, TooltipTrigger, TooltipContent)

### Composite

- ConfirmDialog
- CommandPalette
- DataTable
- FormField
- MultiSelect

## Customization

All components accept a `className` prop for custom styling. Use CSS variables for theming.

## License

MIT
