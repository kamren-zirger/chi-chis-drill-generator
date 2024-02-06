export interface Fundamental {
  id: number;
  command: string; // Command vocalized corresponding to given fundamental
  forwardLength: number; // # 8-to-5 step lengths forward (+) or back (-)
  sideLength: number; // # 8-to-5 step lengths right (+) or left (-)
  counts: number; // duration of fundamental in counts
  stepSize: number; // size of step (8 = 8-to-5 etc.)
  facingDegreeOffset: number; // degree rotation relative to starting orientation
}
