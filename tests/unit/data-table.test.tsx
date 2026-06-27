import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { DataTable } from "../../src/data-table"

interface User {
  name: string
  email: string
  role: string
}

const columns = [
  { header: "Name", accessorKey: "name" as const },
  { header: "Email", accessorKey: "email" as const },
  { header: "Role", accessorKey: "role" as const },
]

const data: User[] = [
  { name: "Alice", email: "alice@test.com", role: "Admin" },
  { name: "Bob", email: "bob@test.com", role: "User" },
]

describe("DataTable", () => {
  it("renders headers and rows", () => {
    render(<DataTable columns={columns} data={data} />)
    expect(screen.getByText("Name")).toBeInTheDocument()
    expect(screen.getByText("Email")).toBeInTheDocument()
    expect(screen.getByText("Role")).toBeInTheDocument()
    expect(screen.getByText("Alice")).toBeInTheDocument()
    expect(screen.getByText("Bob")).toBeInTheDocument()
  })

  it("uses custom cell renderer", () => {
    const cols = [
      {
        header: "Name",
        accessorKey: "name" as const,
        cell: (value: string) => <strong>{value}</strong>,
      },
    ]
    render(<DataTable columns={cols} data={data} />)
    expect(screen.getByText("Alice").tagName).toBe("STRONG")
  })
})
