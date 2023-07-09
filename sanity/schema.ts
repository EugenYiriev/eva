import { SchemaTypeDefinition } from 'sanity';
import { headerSchema } from './headerSchema';
import { heroSchema } from './heroSchema';
import { mainSliderSchema } from './mainsliderSchema';
import { ourRugsSchema } from './ourRugsSchema';
import { comparisonsSchema } from './comparisonsSchema';
import { reviewsSchema } from './reviewsSchema';

export const schema: { types: SchemaTypeDefinition[] } = { 
  types: [headerSchema, heroSchema, mainSliderSchema, ourRugsSchema, comparisonsSchema, reviewsSchema],
};
 