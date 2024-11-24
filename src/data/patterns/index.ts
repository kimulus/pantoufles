import { sweaterPattern } from './sweater';
import { scarfPattern } from './scarf';
import { pantoufflePattern } from './pantouffle';

export const patterns = {
  sweater: sweaterPattern,
  scarf: scarfPattern,
  pantouffle: pantoufflePattern
} as const;

export type PatternType = keyof typeof patterns;