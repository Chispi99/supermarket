import { ProductCategory } from "../classes/porductCategory";
import {Product} from "../classes/product.js";

export class ProductDatabase
{
    static async getData() 
    {
        const file = await fetch(".../data/data.json");
        const json = await file.json();

        let categories = [];

        json.forEach(category =>
        {
            let products = [];

            category.products.forEach(product =>
            {
                products.push(new Product(
                    product.name, 
                    product.description, 
                    product.price
                ));
            });

            categories.push(new ProductCategory(
                category.name, 
                products
            ));
        });

        return categories;
    }
}