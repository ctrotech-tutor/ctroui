# Data Display

## Table

```tsx
import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from "ctroui"
```

A styled HTML table with header, body, footer, and caption.

```tsx
<Table>
  <TableCaption>A list of users</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
      <TableCell>
        <Badge>Active</Badge>
      </TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>3 users</TableCell>
    </TableRow>
  </TableFooter>
</Table>
```

---

## DataTable

```tsx
import { DataTable } from "ctroui"
```

A generic typed data table with custom cell renderers. Useful for simple tabular data without a full data grid library.

```tsx
const columns = [
  { header: "Name", accessorKey: "name" as const },
  { header: "Email", accessorKey: "email" as const },
  { header: "Role", accessorKey: "role" as const },
]

const data = [
  { name: "John", email: "john@example.com", role: "Admin" },
  { name: "Jane", email: "jane@example.com", role: "User" },
]

<DataTable columns={columns} data={data} />
```

---

## Alert

```tsx
import { Alert, AlertTitle, AlertDescription } from "ctroui"
```

A contextual alert/notice with title and description.

```tsx
<Alert>
  <TerminalIcon className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>
```

---

## Chart

```tsx
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle } from "ctroui"
```

A recharts wrapper with auto-theming support. Charts automatically inherit your CSS theme variables.

```tsx
const chartConfig = {
  desktop: { label: "Desktop", color: "hsl(var(--chart-1))" },
  mobile: { label: "Mobile", color: "hsl(var(--chart-2))" },
}

<ChartContainer config={chartConfig} className="h-[300px] w-full">
  <BarChart data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis dataKey="month" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
  </BarChart>
</ChartContainer>
```

Requires `recharts` as a dependency.

---

## Calendar

```tsx
import { Calendar, CalendarDayButton } from "ctroui"
```

A date picker calendar built on `react-day-picker`.

```tsx
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>

<Calendar
  mode="range"
  selected={range}
  onSelect={setRange}
/>
```

Requires `react-day-picker` as a dependency.

---

## Carousel

```tsx
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "ctroui"
```

An image/content carousel with previous/next navigation, built on `embla-carousel-react`.

```tsx
<Carousel className="w-full max-w-sm">
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
    <CarouselItem>Slide 3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

**Carousel props:**
- `opts?: EmblaOptionsType` — Embla carousel options
- `orientation?: "horizontal" | "vertical"`
- `plugins?: EmblaPluginType[]`
- `setApi?: (api: CarouselApi) => void`

Requires `embla-carousel-react` as a dependency.

---

## Toaster (Sonner)

```tsx
import { Toaster } from "ctroui"
```

A toast notification system built on [sonner](https://sonner.emilkowal.ski).

```tsx
// App.tsx
import { Toaster } from "ctroui"

function App() {
  return (
    <>
      <Toaster />
      <MainContent />
    </>
  )
}

// Anywhere in your app
import { toast } from "sonner"

toast("Event has been created")
toast.success("Saved!")
toast.error("Something went wrong")
```

Requires `sonner` as a dependency.
