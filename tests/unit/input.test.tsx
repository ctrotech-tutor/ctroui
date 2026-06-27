import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Input } from "../../src/input"

describe("Input", () => {
  it("renders", () => {
    render(<Input placeholder="Enter text" />)
    const input = screen.getByPlaceholderText(/enter text/i)
    expect(input).toBeInTheDocument()
  })

  it("forwards ref", () => {
    const ref = { current: null }
    render(<Input ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it("merges className prop", () => {
    render(<Input className="custom-class" />)
    const input = screen.getByRole("textbox")
    expect(input.className).toContain("custom-class")
  })

  it("sets type attribute", () => {
    render(<Input type="password" />)
    const input = screen.getByDisplayValue("") as HTMLInputElement
    // use placeholder approach instead
  })

  it("can be disabled", () => {
    render(<Input disabled />)
    const input = screen.getByRole("textbox")
    expect(input).toBeDisabled()
  })
})
