# Forms & Input

## Select

```tsx
import { Select, SelectTrigger, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectSeparator, SelectValue, SelectScrollUpButton, SelectScrollDownButton } from "ctroui"
```

A native-like select menu built on Radix UI with optional scroll buttons.

**Props:** `SelectTrigger` accepts `size?: "sm" | "default"`

```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

---

## DropdownMenu

```tsx
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup } from "ctroui"
```

A contextual dropdown menu with items, checkboxes, radio groups, nested sub-menus, and destructive variants.

**Props:** `DropdownMenuItem` accepts `variant?: "default" | "destructive"` and `inset?: boolean`

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

---

## ContextMenu

```tsx
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup, ContextMenuPortal, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup } from "ctroui"
```

A right-click context menu with the same API surface as DropdownMenu.

```tsx
<ContextMenu>
  <ContextMenuTrigger>Right-click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Undo</ContextMenuItem>
    <ContextMenuItem>Redo</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Cut</ContextMenuItem>
    <ContextMenuItem>Copy</ContextMenuItem>
    <ContextMenuItem>Paste</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

---

## Checkbox

```tsx
import { Checkbox } from "ctroui"
```

A checkbox with indeterminate state support.

```tsx
<Checkbox />
<Checkbox defaultChecked />
<Checkbox checked="indeterminate" />
<Checkbox onCheckedChange={(checked) => console.log(checked)} />
```

---

## RadioGroup

```tsx
import { RadioGroup, RadioGroupItem } from "ctroui"
```

A radio button group for single selection.

```tsx
<RadioGroup defaultValue="option1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option1" id="opt1" />
    <Label htmlFor="opt1">Option 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option2" id="opt2" />
    <Label htmlFor="opt2">Option 2</Label>
  </div>
</RadioGroup>
```

---

## Switch

Already documented in [Core UI](/components/core-ui#switch).

---

## Slider

```tsx
import { Slider } from "ctroui"
```

A range slider for numeric input.

```tsx
<Slider defaultValue={[50]} max={100} step={1} />
<Slider defaultValue={[25, 75]} max={100} step={1} />
```

---

## Toggle

```tsx
import { Toggle, toggleVariants } from "ctroui"
```

A button-like toggle for on/off states.

```tsx
<Toggle aria-label="Toggle bold">
  <BoldIcon />
</Toggle>
<Toggle variant="outline">Toggle</Toggle>
<Toggle size="sm">Small</Toggle>
```

---

## ToggleGroup

```tsx
import { ToggleGroup, ToggleGroupItem } from "ctroui"
```

A group of toggles for single or multi selection.

```tsx
<ToggleGroup type="single" defaultValue="bold">
  <ToggleGroupItem value="bold">B</ToggleGroupItem>
  <ToggleGroupItem value="italic">I</ToggleGroupItem>
  <ToggleGroupItem value="underline">U</ToggleGroupItem>
</ToggleGroup>
```

---

## InputOTP

```tsx
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "ctroui"
```

One-time password input with individual character slots.

```tsx
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

---

## InputGroup

```tsx
import { InputGroup, InputGroupInput, InputGroupTextarea, InputGroupAddon, InputGroupText, InputGroupButton } from "ctroui"
```

An input with addons, buttons, and text prefixes/suffixes.

```tsx
<InputGroup>
  <InputGroupAddon align="left">
    <InputGroupText>$</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="Amount" />
  <InputGroupAddon align="right">
    <InputGroupButton>Submit</InputGroupButton>
  </InputGroupAddon>
</InputGroup>
```

---

## NativeSelect

```tsx
import { NativeSelect, NativeSelectOption, NativeSelectOptGroup } from "ctroui"
```

A styled native `<select>` element with optgroup support.

```tsx
<NativeSelect>
  <NativeSelectOption value="1">Option 1</NativeSelectOption>
  <NativeSelectOptGroup label="Group">
    <NativeSelectOption value="2">Option 2</NativeSelectOption>
  </NativeSelectOptGroup>
</NativeSelect>
```

---

## MultiSelect

```tsx
import { MultiSelect } from "ctroui"
```

A popover-based multi-select with search and removable tag badges.

```tsx
<MultiSelect
  options={[
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
  ]}
  values={["react"]}
  onChange={(values) => console.log(values)}
/>
```

---

## Field

```tsx
import { Field, FieldLabel, FieldContent, FieldTitle, FieldDescription, FieldError, FieldGroup, FieldSet, FieldLegend, FieldSeparator } from "ctroui"
```

A comprehensive form field system with orientation support, error handling, and field grouping.

**Props:** `Field` accepts `orientation?: "vertical" | "horizontal" | "responsive"`

```tsx
<Field orientation="vertical">
  <FieldLabel htmlFor="name">Name</FieldLabel>
  <FieldContent>
    <Input id="name" />
    <FieldDescription>Your full name</FieldDescription>
  </FieldContent>
  <FieldError>Name is required</FieldError>
</Field>
```

---

## Form

```tsx
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, useFormField } from "ctroui"
```

Full react-hook-form integration. Requires `react-hook-form` as a peer dependency.

```tsx
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  email: z.string().email(),
})

function MyForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@example.com" {...field} />
              </FormControl>
              <FormDescription>We'll never share your email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```
