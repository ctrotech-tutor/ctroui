import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { CommandPalette } from "../../src/command-palette"

const items = [
  { id: "1", label: "Settings", onSelect: vi.fn() },
  { id: "2", label: "Profile", onSelect: vi.fn() },
]

describe("CommandPalette", () => {
  it("renders items when open", () => {
    render(<CommandPalette open onOpenChange={vi.fn()} items={items} />)
    expect(screen.getByText("Settings")).toBeInTheDocument()
    expect(screen.getByText("Profile")).toBeInTheDocument()
  })

  it("filters items on search", async () => {
    const user = userEvent.setup()
    render(<CommandPalette open onOpenChange={vi.fn()} items={items} />)
    const input = screen.getByPlaceholderText("Search...")
    await user.type(input, "sett")
    expect(screen.getByText("Settings")).toBeInTheDocument()
    expect(screen.queryByText("Profile")).not.toBeInTheDocument()
  })

  it("calls onSelect and closes on item click", async () => {
    const user = userEvent.setup()
    const onOpenChange = vi.fn()
    render(
      <CommandPalette open onOpenChange={onOpenChange} items={items} />,
    )
    await user.click(screen.getByText("Settings"))
    expect(items[0].onSelect).toHaveBeenCalledTimes(1)
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it("shows no results message", async () => {
    const user = userEvent.setup()
    render(<CommandPalette open onOpenChange={vi.fn()} items={items} />)
    await user.type(screen.getByPlaceholderText("Search..."), "xyz")
    expect(screen.getByText("No results found.")).toBeInTheDocument()
  })
})
