# Overlay & Dialogs

## Dialog

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose, DialogOverlay, DialogPortal } from "ctroui"
```

A modal dialog with overlay, header, footer, and optional close button.

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>Make changes to your profile here.</DialogDescription>
    </DialogHeader>
    {/* Form content */}
    <DialogFooter>
      <Button type="submit">Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

**DialogContent props:** `showCloseButton?: boolean` (default `true`)
**DialogFooter props:** `showCloseButton?: boolean` (default `false`)

---

## AlertDialog

```tsx
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel, AlertDialogOverlay, AlertDialogPortal, AlertDialogMedia } from "ctroui"
```

A confirmation dialog with action/cancel buttons, media slot, and two sizes.

**Props:** `AlertDialogContent` accepts `size?: "default" | "sm"`

```tsx
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogMedia>
        <AlertCircleIcon />
      </AlertDialogMedia>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

---

## Sheet

```tsx
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, SheetClose, SheetOverlay, SheetPortal } from "ctroui"
```

A slide-out panel from any side of the screen.

**Props:** `SheetContent` accepts `side?: "top" | "right" | "bottom" | "left"` (default `"right"`)

```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Panel Title</SheetTitle>
      <SheetDescription>Panel description</SheetDescription>
    </SheetHeader>
    {/* Content */}
    <SheetFooter>
      <Button>Save</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

---

## Drawer

```tsx
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription, DrawerClose, DrawerOverlay, DrawerPortal } from "ctroui"
```

A mobile-friendly drawer built on [vaul](https://vaul.emilkowal.ski). Pull up from the bottom of the screen.

```tsx
<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Edit Profile</DrawerTitle>
      <DrawerDescription>Update your information</DrawerDescription>
    </DrawerHeader>
    {/* Content */}
    <DrawerFooter>
      <Button>Save</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

---

## Popover

```tsx
import { Popover, PopoverTrigger, PopoverContent, PopoverAnchor, PopoverHeader, PopoverTitle, PopoverDescription } from "ctroui"
```

A floating card that appears on click with optional header and description.

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button>Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Details</PopoverTitle>
      <PopoverDescription>More information here</PopoverDescription>
    </PopoverHeader>
    {/* Content */}
  </PopoverContent>
</Popover>
```

---

## Tooltip

```tsx
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "ctroui"
```

A small info popup that appears on hover with an arrow indicator.

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Tooltip content</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

---

## HoverCard

```tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from "ctroui"
```

A rich preview card that appears on hover.

```tsx
<HoverCard>
  <HoverCardTrigger asChild>
    <span>@username</span>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="flex gap-3">
      <Avatar />
      <div>
        <h4>Username</h4>
        <p className="text-sm text-muted-foreground">Bio text</p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
```

## Legacy

### ConfirmDialog

```tsx
import { ConfirmDialog } from "ctroui"
```

A simple confirmation dialog (backward compatible). Prefer `AlertDialog` for new projects.

```tsx
<ConfirmDialog
  title="Delete item?"
  description="This action cannot be undone."
  onConfirm={() => console.log("confirmed")}
>
  <Button>Delete</Button>
</ConfirmDialog>
```
