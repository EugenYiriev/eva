import { SchemaTypeDefinition } from 'sanity';

export const headerSchema: SchemaTypeDefinition = {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'phoneLink',
      title: 'Phone Link',
      type: 'string',
    },
   
  ],
};
