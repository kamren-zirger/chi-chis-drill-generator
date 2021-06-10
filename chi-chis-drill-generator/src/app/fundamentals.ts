/* Chi Chi's Drill Generator */

/* Author: K. Zirger */

export interface Fundamental {
  id: number;
  name: string; // Friendly name to display
  forward: number; // # 8-to-5 step lengths forward (+) or back (-)
  side: number; // # 8-to-5 step lengths right (+) or left (-)
  counts: number; // duration of fundamental in counts
  step: number; // size of step (8 = 8-to-5 etc.)
  facing: number; // degree rotation relative to starting orientation
}

export const fundamentals = [
  {
    id: 0,
    name: 'eight forward, 8-to-5',
    forward: 8,
    side: 0,
    counts: 8,
    step: 8,
    facing: 0,
  },
  {
    id: 1,
    name: 'eight backward, 8-to-5',
    forward: -8,
    side: 0,
    counts: 8,
    step: 8,
    facing: 0,
  },
  {
    id: 2,
    name: 'right oblique, 8-to-5',
    forward: 8,
    side: 8,
    counts: 12,
    step: 8,
    facing: 0,
  },
  {
    id: 3,
    name: 'left oblique, 8-to-5',
    forward: 8,
    side: -8,
    counts: 12,
    step: 8,
    facing: 0,
  },
  {
    id: 4,
    name: 'eight right horn slide',
    forward: 8,
    side: 0,
    counts: 8,
    step: 8,
    facing: 0,
  },
  {
    id: 5,
    name: 'eight left horn slide',
    forward: 8,
    side: 0,
    counts: 8,
    step: 8,
    facing: 0,
  },
];
