// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import preact from "@astrojs/preact";


// https://astro.build/config
export default defineConfig({
  site: "https://tutorialastroloic.netlify.app/",
  integrations: [preact()],
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Roboto",
    cssVariable: "--font-roboto",
  },
  {
    provider: fontProviders.fontsource(),
    name: "Roboto-Mono",
    cssVariable: "--font-roboto-mono",
  }
]
});