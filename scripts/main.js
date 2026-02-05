import { ProductDatabase } from "./database/productDatabase.js";
import { HeaderView } from "./views/headerView.js";
import { ProductView } from "./views/productView.js";

class Main {
  constructor() {
    this.categories = ProductDatabase.getData();
    this.headerView = new HeaderView(this.categories, (categoryName) => {
      this.handleCategorySelection(categoryName);
    });
    this.productView = new ProductView();
  }
    init() {
    this.headerView.render();
    this.showHome();
  }

  handleCategorySelection(categoryName) {
    if (categoryName === "Home") {
      this.showHome();
      return;
    }

    const category = this.categories.find(
      (item) => item.name === categoryName
    );

    if (!category) {
      this.productView.render("Categoría no encontrada", []);
      return;
    }

    this.productView.render(category.name, category.products);
  }

  showHome() {
    const featuredProducts = this.categories.flatMap((category) =>
      category.products.filter((product) => product.featured)
    );

    this.productView.render("Destacados", featuredProducts);
  }
}

const app = new Main();
app.init();