import { Rating } from './rating';

export interface Wine {
  winery: string;
  wine: string;
  rating: Rating;
  location: string;
  image: string;
  id: number;
}
