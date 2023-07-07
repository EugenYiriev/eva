import { SchemaTypeDefinition } from 'sanity';

export const mainSlider: SchemaTypeDefinition = {
  name: 'mainSlider',
  title: 'Main slider',
  type: 'document',
  fields: [
    {
      name: 'leftTitle',
      title: 'Left Title',
      type: 'string',
    },
    {
      name: 'rightTitle',
      title: 'Right Title',
      type: 'string',
    },
    {
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
  ],
};
