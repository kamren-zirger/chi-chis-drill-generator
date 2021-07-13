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
  {
    id: 6,
    name: 'left flank',
    forward: 0,
    side: 0,
    counts: 0,
    step: 8,
    facing: -90,
  },
  {
    id: 7,
    name: 'right flank',
    forward: 0,
    side: 0,
    counts: 0,
    step: 8,
    facing: 90,
  },
  {
    id: 8,
    name: 'regular TTR',
    forward: 0,
    side: 0,
    counts: 0,
    step: 8,
    facing: 180,
  },
  {
    id: 9,
    name: 'box TTR',
    forward: 0,
    side: 0,
    counts: 4,
    step: 8,
    facing: -90,
  },
  {
    id: 10,
    name: 'slide TTR on 2',
    forward: 8,
    side: 0,
    counts: 8,
    step: 8,
    facing: 180,
  },
  {
    id: 11,
    name: 'slide TTR on 4',
    forward: 8,
    side: 0,
    counts: 8,
    step: 8,
    facing: 180,
  },
  {
    id: 12,
    name: 'slide TTR on 6',
    forward: 8,
    side: 0,
    counts: 8,
    step: 8,
    facing: 180,
  },
  {
    id: 13,
    name: 'eight right lateral slide',
    forward: 0,
    side: 8,
    counts: 8,
    step: 8,
    facing: 0,
  },
  {
    id: 14,
    name: 'eight left lateral slide',
    forward: 0,
    side: -8,
    counts: 8,
    step: 8,
    facing: 0,
  },
  {
    id: 15,
    name: 'eight right backward lateral slide',
    forward: 0,
    side: 8,
    counts: 8,
    step: 8,
    facing: 0,
  },
  {
    id: 16,
    name: 'eight left backward lateral slide',
    forward: 0,
    side: -8,
    counts: 8,
    step: 8,
    facing: 0,
  },
  {
    id: 17,
    name: 'up step turn TTR',
    forward: 0,
    side: 0,
    counts: 2,
    step: 8,
    facing: 180,
  },
  {
    id: 18,
    name: 'up step turn to the right',
    forward: 0,
    side: 0,
    counts: 2,
    step: 8,
    facing: 90,
  },
  {
    id: 19,
    name: 'up step turn to the left',
    forward: 0,
    side: 0,
    counts: 2,
    step: 8,
    facing: -90,
  },
  {
    id: 20,
    name: 'eight step kicks',
    forward: 8,
    side: 0,
    counts: 16,
    step: 8,
    facing: 0,
  },
  {
    id: 21,
    name: 'side steps',
    forward: 0,
    side: -1,
    counts: 2,
    step: 8,
    facing: 0,
  },
  {
    id: 22,
    name: 'step sides',
    forward: 0,
    side: 1,
    counts: 2,
    step: 8,
    facing: 0,
  },
  {
    id: 23,
    name: 'eight forward, 6-to-5',
    forward: 8,
    side: 0,
    counts: 6,
    step: 6,
    facing: 0,
  },
  {
    id: 24,
    name: 'eight backward, 6-to-5',
    forward: -8,
    side: 0,
    counts: 6,
    step: 6,
    facing: 0,
  },
  {
    id: 25,
    name: 'right oblique, 6-to-5',
    forward: 8,
    side: 8,
    counts: 8,
    step: 6,
    facing: 0,
  },
  {
    id: 26,
    name: 'left oblique, 6-to-5',
    forward: 8,
    side: -8,
    counts: 8,
    step: 6,
    facing: 0,
  },
  {
    id: 27,
    name: 'eight forward, 10-to-5',
    forward: 8,
    side: 0,
    counts: 10,
    step: 10,
    facing: 0,
  },
  {
    id: 28,
    name: 'eight forward, 12-to-5',
    forward: 8,
    side: 0,
    counts: 12,
    step: 12,
    facing: 0,
  },
  {
    id: 29,
    name: 'eight forward, 16-to-5',
    forward: 8,
    side: 0,
    counts: 16,
    step: 16,
    facing: 0,
  },
  {
    id: 30,
    name: 'hats off, Ohio on the end',
    forward: 0,
    side: 0,
    counts: 25,
    step: 8,
    facing: 0,
  },
  {
    id: 31,
    name: 'hats off, 1-2-3',
    forward: 0,
    side: 0,
    counts: 26,
    step: 8,
    facing: 0,
  },
];
