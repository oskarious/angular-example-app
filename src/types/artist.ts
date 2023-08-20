import { Tag } from './tag';

export type Artist = {
  id: number;
  name: string;
  picture: string;
  price: number;
  tags: Tag[];
  video: string;
};
