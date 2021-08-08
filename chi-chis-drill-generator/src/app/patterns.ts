/* Chi Chi's Drill Generator */

/* Author: K. Zirger */

import { Fundamental, fundamentals } from './fundamentals';

export interface Pattern {
  id: number;
  fundamentals: Array<Fundamental>;
}

export const patterns = [
  {
    id: 0,
    fundamentals: [fundamentals[0], fundamentals[1], fundamentals[2]],
  },
  {
    id: 0,
    fundamentals: [fundamentals[1], fundamentals[0]],
  },
];
