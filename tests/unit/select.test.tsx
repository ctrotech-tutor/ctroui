import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../src/select"

describe("Select", () => {
  it("renders trigger with placeholder", () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Pick one" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
          <SelectItem value="b">Option B</SelectItem>
        </SelectContent>
      </Select>,
    )

    expect(screen.getByText(/pick one/i)).toBeInTheDocument()
  })

  it("opens and shows options on click", async () => {
    const user = userEvent.setup()

    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Item 1</SelectItem>
          <SelectItem value="2">Item 2</SelectItem>
        </SelectContent>
      </Select>,
    )

    await user.click(screen.getByRole("combobox"))

    expect(screen.getByText(/item 1/i)).toBeInTheDocument()
    expect(screen.getByText(/item 2/i)).toBeInTheDocument()
  })

  it("selects an item on click", async () => {
    const user = userEvent.setup()

    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="x">Option X</SelectItem>
        </SelectContent>
      </Select>,
    )

    await user.click(screen.getByRole("combobox"))
    await user.click(screen.getByText(/option x/i))

    expect(screen.getByRole("combobox")).toHaveTextContent("Option X")
  })
})
