import { defineCollection, z } from "astro:content"

const info_sitios = defineCollection({
    schema: z.object({
        title: z.string(),
    })
})

export const collections = { info_sitios }
