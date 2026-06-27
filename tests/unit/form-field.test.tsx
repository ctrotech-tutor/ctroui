import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { FormField } from "../../src/form-field"
import { Input } from "../../src/input"

describe("FormField", () => {
  it("renders label and children", () => {
    render(
      <FormField name="email" label="Email">
        <Input id="email" />
      </FormField>,
    )
    expect(screen.getByText("Email")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  it("associates label with input via htmlFor", () => {
    render(
      <FormField name="email" label="Email">
        <Input id="email" />
      </FormField>,
    )
    const label = screen.getByText("Email")
    expect(label).toHaveAttribute("for", "email")
  })

  it("shows error message", () => {
    render(
      <FormField name="email" label="Email" error="Email is required">
        <Input id="email" />
      </FormField>,
    )
    expect(screen.getByText("Email is required")).toBeInTheDocument()
    expect(screen.getByRole("alert")).toHaveTextContent("Email is required")
  })

  it("shows required indicator", () => {
    render(
      <FormField name="name" label="Name" required>
        <Input id="name" />
      </FormField>,
    )
    expect(screen.getByText("*")).toBeInTheDocument()
  })
})
