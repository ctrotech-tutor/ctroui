# Installation

## Package

```bash
npm install ctroui
```

## Setup Styles

Import the base stylesheet in your global CSS file:

```css
@import "ctroui/styles";
```

### Tailwind CSS v4

ctroui is built for Tailwind CSS v4. The styles are CSS-native with `@theme` directives. Import the stylesheet and the CSS variables will be available for use in your project.

### Tailwind CSS v3

For Tailwind CSS v3, configure your `tailwind.config.js` to resolve the package's CSS:

```js
// tailwind.config.js
module.exports = {
  content: ["./node_modules/ctroui/dist/**/*.{js,cjs}"],
  plugins: [],
}
```

## Requirements

- **React** 18 or 19
- **React DOM** 18 or 19
- **Tailwind CSS** 3.4 or 4
- **Node.js** 18+

## Subpath Imports

Every component can be imported individually for optimal tree-shaking:

```tsx
// Button
import { Button } from "ctroui/button"

// Dialog
import { Dialog, DialogContent, DialogTrigger } from "ctroui/dialog"

// Sidebar
import { Sidebar, SidebarProvider, SidebarTrigger } from "ctroui/sidebar"

// Form (requires react-hook-form)
import { Form, FormField, FormItem } from "ctroui/form"
```

## Styles Only

```tsx
import "ctroui/styles"
```
