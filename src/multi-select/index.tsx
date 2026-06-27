import { Check, ChevronDown, X } from "lucide-react"
import * as React from "react"

import { Badge } from "../badge"
import { cn } from "../lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "../popover"

export interface MultiSelectOption {
  label: string
  value: string
}

export interface MultiSelectProps {
  options: MultiSelectOption[]
  values: string[]
  onChange: (values: string[]) => void
  placeholder?: string
  className?: string
}

export function MultiSelect({
  options,
  values,
  onChange,
  placeholder = "Select...",
  className,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")

  const selected = options.filter((o) => values.includes(o.value))
  const filtered = options.filter(
    (o) => o.label.toLowerCase().includes(search.toLowerCase()) && !values.includes(o.value),
  )

  function toggle(value: string) {
    onChange(values.includes(value) ? values.filter((v) => v !== value) : [...values, value])
  }

  function remove(value: string) {
    onChange(values.filter((v) => v !== value))
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex min-h-[40px] w-full flex-wrap items-center gap-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            className,
          )}
        >
          {selected.length > 0 ? (
            selected.map((opt) => (
              <Badge
                key={opt.value}
                variant="secondary"
                className="gap-1 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation()
                  remove(opt.value)
                }}
              >
                {opt.label}
                <X className="ml-1 h-3 w-3" />
              </Badge>
            ))
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <ChevronDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <div className="flex items-center border-b px-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="flex h-9 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <div className="max-h-[200px] overflow-y-auto p-1">
          {filtered.length === 0 && values.length === options.length ? (
            <div className="py-6 text-center text-sm text-muted-foreground">
              All items selected.
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-6 text-center text-sm text-muted-foreground">No results found.</div>
          ) : (
            filtered.map((opt) => (
              <button
                key={opt.value}
                type="button"
                className="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 pl-8 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                onClick={() => toggle(opt.value)}
              >
                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                  {values.includes(opt.value) && <Check className="h-4 w-4" />}
                </span>
                {opt.label}
              </button>
            ))
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
