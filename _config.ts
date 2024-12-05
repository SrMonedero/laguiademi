import lume from "lume/mod.ts";
import vento from "lume/plugins/vento.ts";
import postcss from "lume/plugins/postcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import favicon from "lume/plugins/favicon.ts";
import googleFonts from "lume/plugins/google_fonts.ts";

const site = lume();

site
    .copy("static")
    .use(favicon({
        input: "favicon.png",
    }))
    .use(googleFonts({
        fonts: "https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap'",
    }))
    .use(tailwindcss({
        // Extract the classes from HTML and JSX files
        extensions: [".html", ".jsx"],

        // Your Tailwind options, like the theme colors and fonts
        options: {
            theme: {
                fontFamily: {
                    serif: ["Playfair Display", "serif"],
                },
            },
        },
    }))
    .use(postcss())
    .use(vento());

export default site;
