import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Label } from "../../src/label"
import { Input } from "../../src/input"

describe("Label", () => {
  it("renders", () => {
    render(<Label>Name</Label>)
    const label = screen.getByText(/name/i)
    expect(label).toBeInTheDocument()
  })

  it("merges className prop", () => {
    render(<Label className="custom-class">Label</Label>)
    const label = screen.getByText(/label/i)
    expect(label.className).toContain("custom-class")
  })

  it("associates with input via htmlFor", () => {
    render(
      <>
        <Label htmlFor="email">Email</Label>
        <Input id="email" />
      </>,
    )
    const label = screen.getByText(/email/i)
    const input = screen.getByRole("textbox")
    expect(label).toHaveAttribute("for", "email")
    expect(input).toHaveAttribute("id", "email")
  })
})
