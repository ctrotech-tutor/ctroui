import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useState } from "react"
import { describe, expect, it } from "vitest"

import { Switch } from "../../src/switch"

describe("Switch", () => {
  it("renders with default state", () => {
    render(<Switch />)
    const el = screen.getByRole("switch")
    expect(el).toBeInTheDocument()
    expect(el).not.toBeChecked()
  })

  it("renders checked when defaultChecked is true", () => {
    render(<Switch defaultChecked />)
    const el = screen.getByRole("switch")
    expect(el).toBeChecked()
  })

  it("toggles on click", async () => {
    const user = userEvent.setup()
    render(<Switch />)
    const el = screen.getByRole("switch")
    await user.click(el)
    expect(el).toBeChecked()
  })

  it("calls onCheckedChange", async () => {
    const user = userEvent.setup()
    let checked = false
    const handleChange = (v: boolean) => { checked = v }
    render(<Switch onCheckedChange={handleChange} />)
    await user.click(screen.getByRole("switch"))
    expect(checked).toBe(true)
  })
})
