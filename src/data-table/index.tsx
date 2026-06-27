import type * as React from "react"

import { cn } from "../lib/utils"

export interface Column<T> {
  header: string
  accessorKey: keyof T & string
  cell?: (value: T[keyof T], row: T) => React.ReactNode
}

export interface DataTableProps<T extends Record<string, unknown>> {
  columns: Column<T>[]
  data: T[]
  className?: string
}

export function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  className,
}: DataTableProps<T>) {
  return (
    <div className={cn("relative w-full overflow-auto", className)}>
      <table className="w-full caption-bottom text-sm">
        <thead>
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            {columns.map((col) => (
              <th
                key={col.header}
                className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              // biome-ignore lint/suspicious/noArrayIndexKey: generic table without guaranteed unique key
              key={i}
              className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
            >
              {columns.map((col) => (
                <td key={col.header} className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                  {col.cell
                    ? col.cell(row[col.accessorKey], row)
                    : String(row[col.accessorKey] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
