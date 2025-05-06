import { field, group } from '@nuxt/content/preview'

export default defineNuxtSchema({
  appConfig: {
    blog: group({
      title: 'Blog Posts',
      description: 'Manage your blog posts and content',
      icon: 'i-heroicons-document-text',
      fields: {
        title: field({
          type: 'string',
          title: 'Title',
          description: 'The title of your blog post',
          icon: 'i-heroicons-heading',
          required: ['string'],
        }),
        description: field({
          type: 'string',
          title: 'Description',
          description: 'A brief description of the blog post',
          icon: 'i-heroicons-document-text',
          required: ['string'],
        }),
        content: field({
          type: 'string',
          title: 'Content',
          description: 'The main content of your blog post',
          icon: 'i-heroicons-document',
          required: ['string'],
          multiline: true,
        }),
        publishedAt: field({
          type: 'number',
          title: 'Publish Date',
          description: 'When to publish this post',
          icon: 'i-heroicons-calendar',
          required: ['string'],
        }),
        tags: field({
          type: 'array',
          title: 'Tags',
          description: 'Categories and tags for this post',
          icon: 'i-heroicons-tag',
          items: {
            type: 'string',
          },
        }),
      },
    }),
  },
})
