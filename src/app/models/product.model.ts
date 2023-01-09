export interface Product {
  _id: string;
  name: string;
  price: number;
  img: string;
  desc: string;
  colors: { clrName: string; imgs: string[]; clr: string }[];
  sizes: (string | number)[];
  saleInfo: {
    isInSale: boolean;
    salePrice: number;
    saleType: string;
  };
  category: object;
}
