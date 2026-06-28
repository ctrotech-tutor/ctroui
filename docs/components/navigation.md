# Navigation

## Tabs

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants } from "ctroui"
```

Tabbed navigation with horizontal/vertical orientation and two style variants.

**Props:** `Tabs` accepts `orientation: "horizontal" | "vertical"`. `TabsList` accepts `variant: "default" | "line"`.

```tsx
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings...</TabsContent>
  <TabsContent value="password">Change password...</TabsContent>
</Tabs>

<!-- Line variant -->
<Tabs defaultValue="tab1">
  <TabsList variant="line">
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

---

## Breadcrumb

```tsx
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis } from "ctroui"
```

A navigation trail indicating the current page location.

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Components</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

---

## Pagination

```tsx
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from "ctroui"
```

Page navigation for lists and tables.

```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

---

## Menubar

```tsx
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarCheckboxItem, MenubarRadioGroup, MenubarRadioItem, MenubarLabel, MenubarShortcut, MenubarSub, MenubarSubTrigger, MenubarSubContent } from "ctroui"
```

A horizontal menu bar with dropdown sub-menus, checkboxes, and radio groups.

```tsx
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Close</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

---

## NavigationMenu

```tsx
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, NavigationMenuViewport, NavigationMenuIndicator, navigationMenuTriggerStyle } from "ctroui"
```

A responsive navigation menu with dropdown content and viewport animation.

```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 w-[400px]">
          <li>
            <NavigationMenuLink href="/docs">Introduction</NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

---

## Sidebar

```tsx
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarGroupAction, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuAction, SidebarMenuBadge, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator, SidebarTrigger, SidebarRail, SidebarInset, SidebarInput, useSidebar } from "ctroui"
```

A comprehensive sidebar system with collapsible sections, nested menus, mobile sheet behavior, and responsive breakpoints. Built on the Radix UI collapsible primitive.

```tsx
<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg">
            <span>My App</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Pages</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/dashboard">Dashboard</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/settings">Settings</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>User info</SidebarFooter>
    <SidebarRail />
  </Sidebar>
  <SidebarInset>
    <header>
      <SidebarTrigger />
    </header>
    <main>Page content</main>
  </SidebarInset>
</SidebarProvider>
```

**Key features:**
- Collapsible with `useSidebar()` hook for programmatic control
- Responsive: collapses to sheet on mobile
- Nested sub-menus with `SidebarMenuSub`
- Customizable variants and sizes
- Keyboard shortcut support (`⌘B` toggle)
