import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../src/tooltip"

describe("Tooltip", () => {
  it("shows content on hover", async () => {
    const user = userEvent.setup({ pointerEventsCheck: 0 })
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip content</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    )
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    await user.hover(screen.getByText("Hover me"))
    const tooltip = await screen.findByRole("tooltip")
    expect(tooltip).toBeInTheDocument()
    expect(tooltip).toHaveTextContent("Tooltip content")
  })
})
