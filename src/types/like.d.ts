export interface IProductCard {
  productId: string;
  image: string;
  link: string;
  modelName: string;
  brand: string;
  modelNo: string;
}

export interface IProductCardProps {
  product: IProductCard;
}
