import lume from "lume/mod.ts";
import vento from "lume/plugins/vento.ts";
import postcss from "lume/plugins/postcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";

const site = lume();

// Add Vento template engine
site.use(vento());

// Add tailwindcss and postcss plugins in the correct order
site.use(tailwindcss());
site.use(postcss());

export default site;
