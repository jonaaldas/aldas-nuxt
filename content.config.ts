import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'data',
      source: 'projects/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        github: z.string(),
        demo: z.string(),
        tech: z.array(z.string()),
      }),
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        date: z.string(),
        title: z.string(),
        slug: z.string(),
        description: z.string(),
      }),
    }),
  },
})
