import { Product } from "../types/product.js";
import { ProductCategory } from "../types/productCategory.js";

export class ProductDatabase {
  static getData() {
    const fresh = new ProductCategory("Frescos", [
      new Product("Manzanas", 2.3, "Manzanas rojas por kilo.", "Frescos", true),
      new Product("Lechuga", 1.2, "Lechuga crujiente de huerta.", "Frescos"),
      new Product("Tomates", 2.0, "Tomates maduros para ensalada.", "Frescos", true),
    ]);

    const bakery = new ProductCategory("Panadería", [
      new Product("Pan integral", 1.6, "Hogaza horneada el mismo día.", "Panadería", true),
      new Product("Croissant", 1.1, "Croissant de mantequilla.", "Panadería"),
      new Product("Baguette", 1.0, "Clásico francés recién hecho.", "Panadería"),
    ]);

    const dairy = new ProductCategory("Lácteos", [
      new Product("Leche entera", 1.4, "Botella de 1L.", "Lácteos"),
      new Product("Yogur natural", 0.9, "Pack de 4 unidades.", "Lácteos", true),
      new Product("Queso fresco", 2.8, "Ideal para ensaladas.", "Lácteos"),
    ]);

    const pantry = new ProductCategory("Despensa", [
      new Product("Arroz", 1.5, "Paquete de 1kg.", "Despensa"),
      new Product("Aceite de oliva", 4.9, "Botella de 1L.", "Despensa", true),
      new Product("Pasta", 1.3, "Espagueti tradicional.", "Despensa"),
    ]);

    return [fresh, bakery, dairy, pantry];
  }
}