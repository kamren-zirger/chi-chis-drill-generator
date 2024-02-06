import { Fundamental } from './fundamental';

export interface Pattern {
  id: number;
  fundamentals: Array<Fundamental>;
  name?: string;
  sublist?: Array<string>;
}
