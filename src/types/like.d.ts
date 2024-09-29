import { TProduct } from "./db";

export type TLikeProduct = {
  like: boolean;
} & TProduct;

export type TPartner = {
  name: string;
  image: string;
}