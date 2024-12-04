import lume from "lume/mod.ts";
import vento from "lume/plugins/vento.ts";
import postcss from "lume/plugins/postcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import favicon from "lume/plugins/favicon.ts";

const site = lume();

site
    .use(favicon({
        input: "favicon.png",
    }))
    .use(tailwindcss())
    .use(postcss())
    .use(vento());

export default site;
