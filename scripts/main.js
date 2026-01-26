import { ProductCategory } from "../components/ProductCategory.js";
import { ProductDatabase } from "../databaseç/productDatabase.js";

const categories = ProductDatabase.getData();

let CategorySamples = new ProductCategory("carne");
CategorySamples.render();
