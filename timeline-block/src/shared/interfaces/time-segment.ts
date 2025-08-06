import { EventName } from './event-name';

export interface TimeSegment {
  id: number;
  title: string;
  startYear: number;
  endYear: number;
  events: EventName[];
}
