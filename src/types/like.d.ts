import { TProduct } from './db';

export type TLikeProduct = {
  like?: boolean;
  datetime?: string;
} & TProduct;

export type TPartner = {
  name: string;
  image: string;
};
