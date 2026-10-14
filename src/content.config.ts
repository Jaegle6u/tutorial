// Importer le chargeur glob
import { glob } from "astro/loaders";
// Importer des utilitaires depuis `astro:content`
import { defineCollection } from "astro:content";
// Importer Zod
import { z } from "astro/zod";
// Définir un chargeur (`loader`) et un schéma (`schema`) pour chaque collection
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});
// Exporter un seul objet `collections` pour enregistrer votre/vos collection(s)
export const collections = { blog };