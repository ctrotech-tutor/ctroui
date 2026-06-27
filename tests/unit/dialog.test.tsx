import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../src/dialog"
import { Button } from "../../src/button"

describe("Dialog", () => {
  it("renders trigger and opens on click", async () => {
    const user = userEvent.setup()

    render(
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>,
    )

    expect(screen.queryByText(/title/i)).not.toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: /open/i }))

    expect(screen.getByText(/title/i)).toBeInTheDocument()
    expect(screen.getByText(/description/i)).toBeInTheDocument()
  })

  it("closes when close button is clicked", async () => {
    const user = userEvent.setup()

    render(
      <Dialog defaultOpen>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modal</DialogTitle>
          </DialogHeader>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>,
    )

    expect(screen.getByText(/modal/i)).toBeInTheDocument()

    const buttons = screen.getAllByRole("button", { name: /close/i })
    await user.click(buttons[buttons.length - 1])

    expect(screen.queryByText(/modal/i)).not.toBeInTheDocument()
  })
})
