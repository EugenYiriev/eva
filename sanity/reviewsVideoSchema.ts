import { SchemaTypeDefinition } from 'sanity';

export const reviewsVideoSchema: SchemaTypeDefinition = {
  name: 'reviewsVideo',
  title: 'Reviews Video',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'videoLink',
              title: 'Video Link',
              type: 'string',
            },
            {
              name: 'backgroundImage',
              title: 'Background Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
};
