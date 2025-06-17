import { defineCollection, z } from "astro:content"

const infoSitios = defineCollection({
    schema: z.object({
        title: z.string(),
    })
})

export const collections = { infoSitios }
