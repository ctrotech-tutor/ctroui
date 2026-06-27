import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { MultiSelect } from "../../src/multi-select"

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
]

describe("MultiSelect", () => {
  it("renders placeholder when no values selected", () => {
    render(
      <MultiSelect options={options} values={[]} onChange={vi.fn()} />,
    )
    expect(screen.getByText("Select...")).toBeInTheDocument()
  })

  it("shows selected items as badges", () => {
    render(
      <MultiSelect
        options={options}
        values={["apple", "banana"]}
        onChange={vi.fn()}
      />,
    )
    expect(screen.getByText("Apple")).toBeInTheDocument()
    expect(screen.getByText("Banana")).toBeInTheDocument()
    expect(screen.queryByText("Cherry")).not.toBeInTheDocument()
  })

  it("opens popover on click and shows unselected options", async () => {
    const user = userEvent.setup()
    render(
      <MultiSelect options={options} values={["apple"]} onChange={vi.fn()} />,
    )
    await user.click(screen.getAllByRole("button")[0])
    const content = await screen.findByPlaceholderText("Search...")
    expect(content).toBeInTheDocument()
    expect(screen.getByText("Banana")).toBeInTheDocument()
    expect(screen.getByText("Cherry")).toBeInTheDocument()
  })
})
