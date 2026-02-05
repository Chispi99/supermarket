import { ProductDatabase } from "./database/productDatabase.js";

const categories = await ProductDatabase.getData();
