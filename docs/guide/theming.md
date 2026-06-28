# Theming

ctroui uses CSS variables for theming. Every color is defined as an `oklch()` value in the `:root` and `.dark` selectors, giving you full control over the look and feel.

## How It Works

All components reference CSS variables like `--primary`, `--background`, `--border`, etc. Override these in your own stylesheet to create a custom theme.

```css
:root {
  --primary: oklch(0.546 0.245 262.881);
  --radius: 0.5rem;
}

.dark {
  --background: oklch(0.141 0.005 285.823);
  --foreground: oklch(0.985 0 0);
}
```

## Theme Presets

### Default (Neutral)

ctroui ships with a neutral default theme. See the [Getting Started](/guide/) page for the full set of CSS variables.

### Zinc

Cool, modern grays — a popular alternative.

<details>
<summary>View Zinc preset</summary>

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.141 0.005 285.823);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.141 0.005 285.823);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.141 0.005 285.823);
  --primary: oklch(0.141 0.005 285.823);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.967 0.001 286.375);
  --secondary-foreground: oklch(0.141 0.005 285.823);
  --muted: oklch(0.967 0.001 286.375);
  --muted-foreground: oklch(0.552 0.016 285.938);
  --accent: oklch(0.967 0.001 286.375);
  --accent-foreground: oklch(0.141 0.005 285.823);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.92 0.004 286.375);
  --input: oklch(0.92 0.004 286.375);
  --ring: oklch(0.705 0.015 286.067);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.141 0.005 285.823);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.141 0.005 285.823);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.141 0.005 285.823);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.141 0.005 285.823);
  --secondary: oklch(0.274 0.006 286.033);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.274 0.006 286.033);
  --muted-foreground: oklch(0.705 0.015 286.067);
  --accent: oklch(0.274 0.006 286.033);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.985 0 0);
  --border: oklch(0.274 0.006 286.033);
  --input: oklch(0.274 0.006 286.033);
  --ring: oklch(0.442 0.017 285.786);
}
```

</details>

### Slate

Blue-leaning grays for a cooler tone.

<details>
<summary>View Slate preset</summary>

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.129 0.042 264.695);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.129 0.042 264.695);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.129 0.042 264.695);
  --primary: oklch(0.129 0.042 264.695);
  --primary-foreground: oklch(0.984 0.003 247.858);
  --secondary: oklch(0.968 0.007 247.896);
  --secondary-foreground: oklch(0.129 0.042 264.695);
  --muted: oklch(0.968 0.007 247.896);
  --muted-foreground: oklch(0.554 0.046 257.417);
  --accent: oklch(0.968 0.007 247.896);
  --accent-foreground: oklch(0.129 0.042 264.695);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.929 0.013 255.508);
  --input: oklch(0.929 0.013 255.508);
  --ring: oklch(0.704 0.04 256.788);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.129 0.042 264.695);
  --foreground: oklch(0.984 0.003 247.858);
  --card: oklch(0.129 0.042 264.695);
  --card-foreground: oklch(0.984 0.003 247.858);
  --popover: oklch(0.129 0.042 264.695);
  --popover-foreground: oklch(0.984 0.003 247.858);
  --primary: oklch(0.984 0.003 247.858);
  --primary-foreground: oklch(0.129 0.042 264.695);
  --secondary: oklch(0.279 0.041 260.031);
  --secondary-foreground: oklch(0.984 0.003 247.858);
  --muted: oklch(0.279 0.041 260.031);
  --muted-foreground: oklch(0.704 0.04 256.788);
  --accent: oklch(0.279 0.041 260.031);
  --accent-foreground: oklch(0.984 0.003 247.858);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.984 0.003 247.858);
  --border: oklch(0.279 0.041 260.031);
  --input: oklch(0.279 0.041 260.031);
  --ring: oklch(0.447 0.043 257.281);
}
```

</details>

### Gray

Balanced, neutral grays.

<details>
<summary>View Gray preset</summary>

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.13 0.028 261.692);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.13 0.028 261.692);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.13 0.028 261.692);
  --primary: oklch(0.13 0.028 261.692);
  --primary-foreground: oklch(0.985 0.002 247.839);
  --secondary: oklch(0.967 0.003 264.542);
  --secondary-foreground: oklch(0.13 0.028 261.692);
  --muted: oklch(0.967 0.003 264.542);
  --muted-foreground: oklch(0.551 0.027 264.364);
  --accent: oklch(0.967 0.003 264.542);
  --accent-foreground: oklch(0.13 0.028 261.692);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.928 0.006 264.531);
  --input: oklch(0.928 0.006 264.531);
  --ring: oklch(0.707 0.022 261.325);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.13 0.028 261.692);
  --foreground: oklch(0.985 0.002 247.839);
  --card: oklch(0.13 0.028 261.692);
  --card-foreground: oklch(0.985 0.002 247.839);
  --popover: oklch(0.13 0.028 261.692);
  --popover-foreground: oklch(0.985 0.002 247.839);
  --primary: oklch(0.985 0.002 247.839);
  --primary-foreground: oklch(0.13 0.028 261.692);
  --secondary: oklch(0.273 0.016 285.238);
  --secondary-foreground: oklch(0.985 0.002 247.839);
  --muted: oklch(0.273 0.016 285.238);
  --muted-foreground: oklch(0.707 0.022 261.325);
  --accent: oklch(0.273 0.016 285.238);
  --accent-foreground: oklch(0.985 0.002 247.839);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.985 0.002 247.839);
  --border: oklch(0.273 0.016 285.238);
  --input: oklch(0.273 0.016 285.238);
  --ring: oklch(0.443 0.014 285.299);
}
```

</details>

### Stone

Warm, earthy grays.

<details>
<summary>View Stone preset</summary>

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.147 0.004 49.25);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.147 0.004 49.25);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.147 0.004 49.25);
  --primary: oklch(0.147 0.004 49.25);
  --primary-foreground: oklch(0.985 0.001 106.423);
  --secondary: oklch(0.97 0.001 106.424);
  --secondary-foreground: oklch(0.147 0.004 49.25);
  --muted: oklch(0.97 0.001 106.424);
  --muted-foreground: oklch(0.553 0.013 58.071);
  --accent: oklch(0.97 0.001 106.424);
  --accent-foreground: oklch(0.147 0.004 49.25);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.923 0.003 48.717);
  --input: oklch(0.923 0.003 48.717);
  --ring: oklch(0.709 0.01 56.259);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.147 0.004 49.25);
  --foreground: oklch(0.985 0.001 106.423);
  --card: oklch(0.147 0.004 49.25);
  --card-foreground: oklch(0.985 0.001 106.423);
  --popover: oklch(0.147 0.004 49.25);
  --popover-foreground: oklch(0.985 0.001 106.423);
  --primary: oklch(0.985 0.001 106.423);
  --primary-foreground: oklch(0.147 0.004 49.25);
  --secondary: oklch(0.268 0.007 34.298);
  --secondary-foreground: oklch(0.985 0.001 106.423);
  --muted: oklch(0.268 0.007 34.298);
  --muted-foreground: oklch(0.709 0.01 56.259);
  --accent: oklch(0.268 0.007 34.298);
  --accent-foreground: oklch(0.985 0.001 106.423);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.985 0.001 106.423);
  --border: oklch(0.268 0.007 34.298);
  --input: oklch(0.268 0.007 34.298);
  --ring: oklch(0.443 0.011 73.639);
}
```

</details>

### Accent Themes

Use a neutral base (e.g. Zinc) and override just the accent colors:

```css
@import "ctroui/styles";

:root {
  /* Zinc base */
  --background: oklch(1 0 0);
  --foreground: oklch(0.141 0.005 285.823);
  /* ... */

  /* Rose accent */
  --primary: oklch(0.527 0.154 6.143);
  --ring: oklch(0.527 0.154 6.143);
}
```

## CSS Variables Reference

| Variable | Description |
|----------|-------------|
| `--background` | Page background |
| `--foreground` | Default text color |
| `--card` | Card background |
| `--card-foreground` | Card text color |
| `--popover` | Popover/dropdown background |
| `--popover-foreground` | Popover/dropdown text color |
| `--primary` | Primary action color |
| `--primary-foreground` | Text on primary backgrounds |
| `--secondary` | Secondary action color |
| `--secondary-foreground` | Text on secondary backgrounds |
| `--muted` | Muted/de-emphasized background |
| `--muted-foreground` | Muted text color |
| `--accent` | Accent/hover background |
| `--accent-foreground` | Text on accent backgrounds |
| `--destructive` | Destructive action color |
| `--destructive-foreground` | Text on destructive backgrounds |
| `--border` | Default border color |
| `--input` | Input field border |
| `--ring` | Focus ring color |
| `--radius` | Border radius scale |
