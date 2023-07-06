import { SchemaTypeDefinition } from 'sanity';
import { headerSchema } from './headerSchema';
import { heroSchema } from './heroSchema';
 
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [headerSchema, heroSchema],
};
