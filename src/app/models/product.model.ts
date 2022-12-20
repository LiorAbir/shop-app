export interface Product {
  _id: string;
  name: string;
  price: number;
  desc: string;
  colors: object[];
  sizes: string[];
  isInSale: boolean;
  salePrice: number;
  labels: object;
}
