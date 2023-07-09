import { SchemaTypeDefinition } from 'sanity';

export const comparisonsSchema: SchemaTypeDefinition = {
  name: 'comparisons',
  title: 'Comparisons',
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
      name: 'image',
      title: 'Video cover',
      type: 'image',
    },
    {
      name: 'videoLink',
      title: 'Link for video',
      type: 'string',
    },
    {
      name: 'listMinus',
      title: 'Minus',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'list',
              title: 'List',
              type: 'array',
              of: [
                {
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'listPlus',
      title: 'Plus',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'list',
              title: 'List',
              type: 'array',
              of: [
                {
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
