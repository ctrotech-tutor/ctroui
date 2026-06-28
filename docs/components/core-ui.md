# Core UI

## Button

```tsx
import { Button } from "ctroui"
```

Renders a button element with support for variants, sizes, and `asChild` composition via Radix Slot.

**Props:** `React.ComponentProps<"button">` + `VariantProps<typeof buttonVariants>` + `{ asChild?: boolean }`

```tsx
<Button>Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Cancel</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">
  <UserIcon />
</Button>

<Button asChild>
  <a href="/link">As Link</a>
</Button>
```

**Variants:** `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
**Sizes:** `default`, `xs`, `sm`, `lg`, `icon`, `icon-xs`, `icon-sm`, `icon-lg`

---

## Badge

```tsx
import { Badge } from "ctroui"
```

A small label for statuses, tags, or categories.

**Props:** `React.ComponentProps<"span">` + `VariantProps<typeof badgeVariants>` + `{ asChild?: boolean }`

```tsx
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="ghost">Ghost</Badge>
<Badge variant="link">Link</Badge>
```

**Variants:** `default`, `secondary`, `destructive`, `outline`, `ghost`, `link`

---

## Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from "ctroui"
```

A versatile content container with header, body, footer, and action slot.

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>
      <Button variant="ghost" size="icon">...</Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p>Main content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Save</Button>
  </CardFooter>
</Card>
```

---

## Input

```tsx
import { Input } from "ctroui"
```

A styled text input with focus ring, disabled state, and file input support.

**Props:** `React.ComponentProps<"input">`

```tsx
<Input placeholder="Enter text..." />
<Input type="email" placeholder="Email" />
<Input disabled />
<Input type="file" />
```

---

## Label

```tsx
import { Label } from "ctroui"
```

A form label built on Radix Label primitive, with peer-disabled and group-disabled styling.

**Props:** `React.ComponentProps<typeof LabelPrimitive.Root>`

```tsx
<Label htmlFor="email">Email</Label>
<Input id="email" type="email" />
```

---

## Separator

```tsx
import { Separator } from "ctroui"
```

A visual divider for separating content.

**Props:** `React.ComponentProps<typeof SeparatorPrimitive.Root>`

```tsx
<Separator />
<Separator orientation="vertical" />
```

---

## Skeleton

```tsx
import { Skeleton } from "ctroui"
```

A placeholder for loading content.

```tsx
<Skeleton className="h-4 w-[250px]" />
<Skeleton className="h-12 w-12 rounded-full" />
```

---

## Switch

```tsx
import { Switch } from "ctroui"
```

A toggle switch with two sizes.

**Props:** `React.ComponentProps<typeof SwitchPrimitive.Root>` + `{ size?: "sm" | "default" }`

```tsx
<Switch />
<Switch size="sm" />
<Switch defaultChecked />
<Switch onCheckedChange={(checked) => console.log(checked)} />
```

---

## Textarea

```tsx
import { Textarea } from "ctroui"
```

A multi-line text input.

**Props:** `React.ComponentProps<"textarea">`

```tsx
<Textarea placeholder="Type your message..." />
<Textarea disabled />
```

---

## Kbd

```tsx
import { Kbd, KbdGroup } from "ctroui"
```

Keyboard shortcut display.

```tsx
<Kbd>Ctrl+K</Kbd>
<KbdGroup>
  <Kbd>Ctrl</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>
```

---

## Spinner

```tsx
import { Spinner } from "ctroui"
```

A loading spinner indicator.

```tsx
<Spinner />
<Spinner className="h-6 w-6" />
```

---

## Empty

```tsx
import { Empty, EmptyMedia, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent } from "ctroui"
```

An empty state placeholder with media, header, and content slots.

```tsx
<Empty>
  <EmptyMedia>
    <InboxIcon className="size-12" />
  </EmptyMedia>
  <EmptyHeader>
    <EmptyTitle>No messages</EmptyTitle>
    <EmptyDescription>You haven't received any messages yet.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>New Message</Button>
  </EmptyContent>
</Empty>
```

---

## Item

```tsx
import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions, ItemFooter, ItemGroup, ItemHeader, ItemSeparator } from "ctroui"
```

A list item component with media, content, and action slots. Supports horizontal and vertical orientations.

```tsx
<Item>
  <ItemMedia>
    <Avatar />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>John Doe</ItemTitle>
    <ItemDescription>Online</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button variant="ghost" size="icon"><MoreIcon /></Button>
  </ItemActions>
</Item>
```
