import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../src/card"

describe("Card", () => {
  it("renders Card with all sub-components", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description</CardDescription>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    )

    expect(screen.getByText(/card title/i)).toBeInTheDocument()
    expect(screen.getByText(/card description/i)).toBeInTheDocument()
    expect(screen.getByText(/content/i)).toBeInTheDocument()
    expect(screen.getByText(/footer/i)).toBeInTheDocument()
  })

  it("merges className on all sub-components", () => {
    render(
      <Card className="card-custom">
        <CardHeader className="header-custom">
          <CardTitle className="title-custom">Title</CardTitle>
          <CardDescription className="desc-custom">Desc</CardDescription>
        </CardHeader>
        <CardContent className="content-custom">Content</CardContent>
        <CardFooter className="footer-custom">Footer</CardFooter>
      </Card>,
    )

    expect(screen.getByText(/title/i).className).toContain("title-custom")
    expect(screen.getByText(/desc/i).className).toContain("desc-custom")
    expect(screen.getByText(/content/i).className).toContain("content-custom")
    expect(screen.getByText(/footer/i).className).toContain("footer-custom")
  })
})
