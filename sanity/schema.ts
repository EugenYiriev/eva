import { SchemaTypeDefinition } from 'sanity';
import { headerSchema } from './headerSchema';
import { heroSchema } from './heroSchema';
import { mainSlider } from './mainslider';
 
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [headerSchema, heroSchema, mainSlider],
};
