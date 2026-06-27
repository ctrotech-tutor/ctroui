import { Search } from "lucide-react"
import * as React from "react"

import { Dialog, DialogContent } from "../dialog"

export interface CommandItem {
  id: string
  label: string
  icon?: React.ReactNode
  keywords?: string[]
  onSelect: () => void
}

export interface CommandGroup {
  label: string
  items: CommandItem[]
}

export interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  items: CommandItem[]
  groups?: CommandGroup[]
  placeholder?: string
}

export function CommandPalette({
  open,
  onOpenChange,
  items,
  groups,
  placeholder = "Search...",
}: CommandPaletteProps) {
  const [query, setQuery] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (open) {
      setQuery("")
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open])

  function filterItems(itemList: CommandItem[]) {
    if (!query) return itemList
    const q = query.toLowerCase()
    return itemList.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.keywords?.some((k) => k.toLowerCase().includes(q)),
    )
  }

  function renderItem(item: CommandItem) {
    return (
      <button
        key={item.id}
        type="button"
        className="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground aria-selected:bg-accent aria-selected:text-accent-foreground"
        onClick={() => {
          item.onSelect()
          onOpenChange(false)
        }}
      >
        {item.icon && <span className="mr-2 h-4 w-4 shrink-0">{item.icon}</span>}
        <span>{item.label}</span>
      </button>
    )
  }

  const flatItems = filterItems(items)
  const flatGroupItems = groups?.map((g) => ({
    ...g,
    items: filterItems(g.items),
  }))

  const hasResults = flatItems.length > 0 || flatGroupItems?.some((g) => g.items.length > 0)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="top-[15%] translate-y-0 max-w-[540px] p-0 gap-0">
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="flex h-11 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="max-h-[300px] overflow-y-auto p-1">
          {flatItems.map(renderItem)}
          {flatGroupItems?.map((group) => (
            <div key={group.label}>
              {group.items.length > 0 && (
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                  {group.label}
                </div>
              )}
              {group.items.map(renderItem)}
            </div>
          ))}
          {!hasResults && (
            <div className="py-6 text-center text-sm text-muted-foreground">No results found.</div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
