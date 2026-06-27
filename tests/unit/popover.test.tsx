import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import { Popover, PopoverContent, PopoverTrigger } from "../../src/popover"
import { Button } from "../../src/button"

describe("Popover", () => {
  it("renders trigger and opens on click", async () => {
    const user = userEvent.setup()

    render(
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open</Button>
        </PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </Popover>,
    )

    expect(screen.queryByText(/popover content/i)).not.toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: /open/i }))

    expect(screen.getByText(/popover content/i)).toBeInTheDocument()
  })

  it("renders with custom align and sideOffset", async () => {
    const user = userEvent.setup()

    render(
      <Popover>
        <PopoverTrigger asChild>
          <Button>Trigger</Button>
        </PopoverTrigger>
        <PopoverContent align="start" sideOffset={8}>
          Aligned content
        </PopoverContent>
      </Popover>,
    )

    await user.click(screen.getByRole("button", { name: /trigger/i }))
    expect(screen.getByText(/aligned content/i)).toBeInTheDocument()
  })
})
