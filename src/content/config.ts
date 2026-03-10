import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.date(),
        updatedDate: z.date().optional(),
        author: z.string().default('Site Owner'),
        heroImage: image().optional(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
    }),
});

export const collections = {
    blog: blogCollection,
};
