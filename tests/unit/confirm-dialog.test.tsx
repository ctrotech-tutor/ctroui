import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { ConfirmDialog } from "../../src/confirm-dialog"

describe("ConfirmDialog", () => {
  it("renders trigger and opens on click", async () => {
    const user = userEvent.setup()
    render(
      <ConfirmDialog
        trigger={<button>Delete</button>}
        title="Confirm Delete"
        description="Are you sure?"
        onConfirm={vi.fn()}
      />,
    )
    expect(screen.queryByText("Confirm Delete")).not.toBeInTheDocument()
    await user.click(screen.getByText("Delete"))
    expect(await screen.findByText("Confirm Delete")).toBeInTheDocument()
    expect(screen.getByText("Are you sure?")).toBeInTheDocument()
  })

  it("calls onConfirm when confirmed", async () => {
    const user = userEvent.setup()
    const onConfirm = vi.fn()
    render(
      <ConfirmDialog
        trigger={<button>Delete</button>}
        title="Confirm"
        onConfirm={onConfirm}
      />,
    )
    await user.click(screen.getByText("Delete"))
    await user.click(screen.getByRole("button", { name: /confirm/i }))
    expect(onConfirm).toHaveBeenCalledTimes(1)
  })

  it("renders destructive variant", () => {
    render(
      <ConfirmDialog
        open
        title="Destructive"
        onConfirm={vi.fn()}
        variant="destructive"
      />,
    )
    const btn = screen.getByRole("button", { name: /confirm/i })
    expect(btn.className).toContain("destructive")
  })
})
