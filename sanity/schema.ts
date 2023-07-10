import { SchemaTypeDefinition } from 'sanity';
import { headerSchema } from './headerSchema';
import { heroSchema } from './heroSchema';
import { mainSliderSchema } from './mainsliderSchema';
import { ourRugsSchema } from './ourRugsSchema';
import { comparisonsSchema } from './comparisonsSchema';
import { reviewsSchema } from './reviewsSchema';
import { reviewsVideoSchema } from './reviewsVideoSchema'
import { makeOrderSchema } from './makeOrderSchema'

export const schema: { types: SchemaTypeDefinition[] } = { 
  types: [headerSchema, heroSchema, mainSliderSchema, ourRugsSchema, comparisonsSchema, reviewsSchema, reviewsVideoSchema, makeOrderSchema],
};
 