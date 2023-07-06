import { SchemaTypeDefinition } from 'sanity';

export const heroSchema: SchemaTypeDefinition = {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'listItems',
      title: 'List item',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'buttonTitle',
              title: 'Button title',
              type: 'string',
            },
            {
              name: 'buttonLink',
              title: 'Button link',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
