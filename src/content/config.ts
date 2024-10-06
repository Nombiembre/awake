import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    fecha: z.date(),
    esconder: z.boolean()
  }),
});

export const collections = {
  'blog': blogCollection,
};
