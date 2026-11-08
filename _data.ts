// Reads every category from c/*.md so the templates can show names,
// descriptions and counts. To add a shop, edit the list in its .md file.
// To add or reorder a category, edit `order` below.

const order = [
  "arte",
  "ceramica",
  "para-el-hogar",
  "complementos",
  "moda",
  "homewear",
  "bisuteria",
  "belleza",
  "libros",
  "infantil",
  "suscripciones",
  "gastronomia",
];

export interface Item {
  name: string;
  description: string;
  url: string;
  source: string;
}

export interface Category {
  slug: string;
  title: string;
  url: string;
  number: string;
  items: Item[];
}

function source(url: string): string {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return host === "instagram.com" ? "Instagram" : host;
  } catch {
    return "";
  }
}

function parse(slug: string, index: number): Category {
  const text = Deno.readTextFileSync(`./c/${slug}.md`);
  const title = text.match(/^title:\s*(.+)$/m)?.[1].trim() ?? slug;
  const items: Item[] = [];

  for (const [, label, url] of text.matchAll(/^- \[(.+)\]\((.+)\)\s*$/gm)) {
    const [name, ...rest] = label.split(/\s+[-–]\s+/);
    items.push({
      name: name.trim(),
      description: rest.join(" – ").trim(),
      url: url.trim(),
      source: source(url.trim()),
    });
  }

  return {
    slug,
    title,
    url: `/c/${slug}/`,
    number: String(index + 1).padStart(2, "0"),
    items,
  };
}

export const categories: Category[] = order.map(parse);
export const total = categories.reduce((n, c) => n + c.items.length, 0);
