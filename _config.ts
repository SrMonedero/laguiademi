import lume from "lume/mod.ts";
import vento from "lume/plugins/vento.ts";
import favicon from "lume/plugins/favicon.ts";
import googleFonts from "lume/plugins/google_fonts.ts";

const site = lume();

site
  .ignore("README.md")
  .copy("static")
  .copy("styles.css")
  .use(favicon({
    input: "favicon.png",
  }))
  .use(googleFonts({
    fonts:
      "https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@400&family=Playfair+Display:ital,wght@0,400..600;1,400..600&display=swap",
  }))
  .use(vento());

export default site;
