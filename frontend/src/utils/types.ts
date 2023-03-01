// Products
import { Prisma, PrismaClient } from "@prisma/client";
import {FavoritePopulated} from "../../../backend/src/utils/types"
// export type ProductPopulated = Prisma.ProductGetPayload<{
//   include: typeof 
// }




//  product

// export interface ProductsData {
//   favorite: Array<FavoritePopulated>;
// }
export interface ProductsData {
  products: Array<Products>;
}

export interface Colors {
  alt: string;
  imgs: string;
  url: string;

}
export interface Products {
  id: string;
  imgs: Array<string>;
  name: string;
  price: string;
  sizes: Array<string>;
  description: string;
  colors: Array<Colors>;
}


// favorite

export interface FavoritesData {
  favorite: Array<FavoritePopulated>;
}
