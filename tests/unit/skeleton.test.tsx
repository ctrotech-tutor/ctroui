import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Skeleton } from "../../src/skeleton"

describe("Skeleton", () => {
  it("renders", () => {
    const { container } = render(<Skeleton />)
    const el = container.firstChild as HTMLElement
    expect(el).toBeInTheDocument()
    expect(el.className).toContain("animate-pulse")
  })

  it("merges className prop", () => {
    const { container } = render(<Skeleton className="h-10 w-full" />)
    const el = container.firstChild as HTMLElement
    expect(el.className).toContain("h-10")
    expect(el.className).toContain("w-full")
  })
})
