export interface Product {
  _id: string;
  name: string;
  price: number;
  img: string;
  desc: string;
  colors: object[];
  sizes: string[];
  isInSale: boolean;
  salePrice: number;
  category: object;
}
