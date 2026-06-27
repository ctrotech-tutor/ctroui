import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Badge } from "../../src/badge"

describe("Badge", () => {
  it("renders with default variant", () => {
    render(<Badge>Badge</Badge>)
    const badge = screen.getByText(/badge/i)
    expect(badge).toBeInTheDocument()
    expect(badge.className).toContain("bg-primary")
  })

  it("applies variant classes", () => {
    const { rerender } = render(<Badge variant="secondary">Secondary</Badge>)
    expect(screen.getByText(/secondary/i).className).toContain("bg-secondary")

    rerender(<Badge variant="destructive">Destructive</Badge>)
    expect(screen.getByText(/destructive/i).className).toContain("bg-destructive")

    rerender(<Badge variant="outline">Outline</Badge>)
    expect(screen.getByText(/outline/i).className).toContain("text-foreground")
  })

  it("merges className prop", () => {
    render(<Badge className="custom-class">Custom</Badge>)
    const badge = screen.getByText(/custom/i)
    expect(badge.className).toContain("custom-class")
  })
})
