# Lume Project

This is a static site built with [Lume](https://lume.land/), using:
- Deno
- Vento template engine
- Plain CSS (`styles.css`)

## Development

To start the development server:

```bash
deno task serve
```

To build the site:

```bash
deno task build
```

## Project Structure

- `_config.ts`: Lume configuration file
- `deno.json`: Deno configuration and tasks
- `styles.css`: site styles
- `_data.ts`: category order; reads shops from `c/*.md`
- `c/*.md`: one file per category, one `- [Name - description](url)` per shop
- `_includes/`: page templates
