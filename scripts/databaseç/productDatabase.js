import { products } from "../data/products.js";
export class ProductDatabase
{
   static getdata()
   {
        let categorías = [];

        let bakeryPrducts = [];
        let bread = new Products ("Pan");
        bakkeryProducts.push(bread);

        let bakeryCategory = new ProductCategory("Panadería", bakeryProducts);
        categorías.push(bakeryCategory);    

       return categorías;
   }
}