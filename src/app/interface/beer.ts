import { Rating } from './rating';

export interface Beer {
  price: string;
  name: string;
  rating: Rating;
  image: string;
  id: number;
}
