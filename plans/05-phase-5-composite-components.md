# Phase 5 — Composite Components (v1.0.0)

## Goal
Higher-level UI patterns built from base ctroui components. These are the "real value" beyond simple re-exports — pre-composed, tested patterns that solve common UI challenges.

## Components

| Component | Built From | Purpose |
|---|---|---|
| **ConfirmDialog** | Dialog + Button | Confirmation modal with cancel/confirm actions |
| **FormField** | Label + Input + error message | Label+input+validation error composite |
| **DataTable** | Table + DropdownMenu + Badge + Checkbox | Sortable, filterable data table with actions |
| **CommandPalette** | Command + Dialog | ⌘K-style command palette |
| **MultiSelect** | Popover + Badge + Command | Multi-select with tag display |

---

## ConfirmDialog

```tsx
interface ConfirmDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  confirmLabel?: string
  cancelLabel?: string
  variant?: "default" | "destructive"
  onConfirm: () => void
  loading?: boolean
}

export const ConfirmDialog = ({ ... }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        {description && <DialogDescription>{description}</DialogDescription>}
      </DialogHeader>
      <DialogFooter>
        <Button variant="outline" onClick={() => onOpenChange(false)}>{cancelLabel}</Button>
        <Button variant={variant} onClick={onConfirm} disabled={loading}>{confirmLabel}</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)
```

## FormField

```tsx
interface FormFieldProps {
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}

export const FormField = ({ label, error, required, children }) => (
  <div className="space-y-2">
    <Label>
      {label}
      {required && <span className="text-destructive"> *</span>}
    </Label>
    {children}
    {error && <p className="text-sm text-destructive">{error}</p>}
  </div>
)
```

## DataTable
Uses `@tanstack/react-table` as a peer dependency. Composes Table, DropdownMenu, Badge, Checkbox, and Button. Supports sorting, filtering, pagination, row selection, and column visibility.

## CommandPalette
Built on `cmdk` + `@radix-ui/react-dialog`. Composes Dialog + Command. Provides a searchable command interface.

## MultiSelect
Composes Popover + Badge + Command. Selected items shown as badges inside the trigger. Dropdown for adding/removing selections.

## Dependencies
- `@tanstack/react-table` (peer) — DataTable
- `cmdk` (runtime) — CommandPalette

## Tests
- ConfirmDialog: confirm/cancel flow, destructive variant
- FormField: render label, show/hide error, required indicator
- DataTable: sort, filter, paginate, select rows
- CommandPalette: search filters items, onSelect fires
- MultiSelect: select/deselect items, badges render
