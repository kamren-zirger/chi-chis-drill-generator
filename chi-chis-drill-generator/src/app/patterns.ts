/* Chi Chi's Drill Generator */

/* Author: K. Zirger */

import { Fundamental, fundamentals } from './fundamentals';

export interface Pattern {
  id: number;
  fundamentals: Array<Fundamental>;
  name?: string;
  sublist?: Array<string>;
}

export const patterns = [
  {
    id: 0,
    fundamentals: [fundamentals[0], fundamentals[1]],
  },
  {
    id: 1,
    fundamentals: [fundamentals[1], fundamentals[0]],
  },
  {
    id: 2,
    fundamentals: [
      fundamentals[0],
      fundamentals[7],
      fundamentals[0],
      fundamentals[7],
      fundamentals[0],
      fundamentals[7],
      fundamentals[0],
    ],
    name: 'Box of rights',
  },
  {
    id: 3,
    fundamentals: [
      fundamentals[0],
      fundamentals[6],
      fundamentals[0],
      fundamentals[6],
      fundamentals[0],
      fundamentals[6],
      fundamentals[0],
    ],
    name: 'Box of lefts',
  },
  {
    id: 4,
    fundamentals: [
      fundamentals[0],
      fundamentals[7],
      fundamentals[0],
      fundamentals[7],
      fundamentals[0],
      fundamentals[7],
      fundamentals[0],
      fundamentals[7],
    ],
    name: 'Box of rights, right flank',
  },
  {
    id: 5,
    fundamentals: [
      fundamentals[0],
      fundamentals[6],
      fundamentals[0],
      fundamentals[6],
      fundamentals[0],
      fundamentals[6],
      fundamentals[0],
      fundamentals[6],
    ],
    name: 'Box of lefts, left flank',
  },
  {
    id: 6,
    fundamentals: [
      fundamentals[2],
      fundamentals[1],
      fundamentals[3],
      fundamentals[1],
    ],
  },
  {
    id: 7,
    fundamentals: [
      fundamentals[25],
      fundamentals[1],
      fundamentals[26],
      fundamentals[1],
    ],
  },
  {
    id: 8,
    fundamentals: [
      fundamentals[3],
      fundamentals[1],
      fundamentals[2],
      fundamentals[1],
    ],
  },
  {
    id: 9,
    fundamentals: [
      fundamentals[26],
      fundamentals[1],
      fundamentals[25],
      fundamentals[1],
    ],
  },
  {
    id: 10,
    fundamentals: [
      fundamentals[23],
      fundamentals[0],
      fundamentals[27],
      fundamentals[28],
    ],
  },
  {
    id: 10,
    fundamentals: [
      fundamentals[23],
      fundamentals[0],
      fundamentals[28],
      fundamentals[29],
    ],
  },
  {
    id: 11,
    fundamentals: [fundamentals[20]],
  },
  {
    id: 12,
    fundamentals: [fundamentals[20], fundamentals[20]],
  },
  {
    id: 13,
    fundamentals: [
      fundamentals[0],
      fundamentals[14],
      fundamentals[13],
      fundamentals[13],
      fundamentals[14],
      fundamentals[1],
    ],
  },
  {
    id: 14,
    fundamentals: [
      fundamentals[0],
      fundamentals[13],
      fundamentals[14],
      fundamentals[14],
      fundamentals[13],
      fundamentals[1],
    ],
  },
  {
    id: 15,
    fundamentals: [
      fundamentals[0],
      fundamentals[14],
      fundamentals[15],
      fundamentals[15],
      fundamentals[14],
      fundamentals[1],
    ],
  },
  {
    id: 16,
    fundamentals: [
      fundamentals[0],
      fundamentals[13],
      fundamentals[16],
      fundamentals[16],
      fundamentals[13],
      fundamentals[1],
    ],
  },
];
