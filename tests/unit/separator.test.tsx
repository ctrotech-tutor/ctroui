import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Separator } from "../../src/separator"

describe("Separator", () => {
  it("renders", () => {
    render(<Separator />)
    const el = document.querySelector('[data-orientation]')
    expect(el).toBeInTheDocument()
  })

  it("renders horizontal by default", () => {
    render(<Separator />)
    const el = document.querySelector('[data-orientation="horizontal"]')
    expect(el).toBeInTheDocument()
  })

  it("renders vertical orientation", () => {
    render(<Separator orientation="vertical" />)
    const el = document.querySelector('[data-orientation="vertical"]')
    expect(el).toBeInTheDocument()
  })
})
