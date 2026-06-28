import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Slot } from "@radix-ui/react-slot"

import { Button } from "../../src/button"

describe("Button", () => {
  it("renders with default variant and size", () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole("button", { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button.tagName).toBe("BUTTON")
  })

  it("applies variant classes", () => {
    const { rerender } = render(<Button variant="destructive">Delete</Button>)
    const button = screen.getByRole("button", { name: /delete/i })
    expect(button.className).toContain("bg-destructive")

    rerender(<Button variant="outline">Cancel</Button>)
    expect(screen.getByRole("button", { name: /cancel/i }).className).toContain("border-input")
  })

  it("applies size classes", () => {
    render(<Button size="sm">Small</Button>)
    const button = screen.getByRole("button", { name: /small/i })
    expect(button.className).toContain("h-8")
  })

  it("merges className prop", () => {
    render(<Button className="custom-class">Styled</Button>)
    const button = screen.getByRole("button", { name: /styled/i })
    expect(button.className).toContain("custom-class")
  })

  it("renders as child when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/test">Link</a>
      </Button>,
    )
    const link = screen.getByRole("link", { name: /link/i })
    expect(link).toBeInTheDocument()
    expect(link.tagName).toBe("A")
  })

  it("forwards ref", () => {
    const ref = { current: null }
    render(<Button ref={ref}>Ref</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it("is disabled when disabled prop is set", () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole("button", { name: /disabled/i })
    expect(button).toBeDisabled()
  })
})
