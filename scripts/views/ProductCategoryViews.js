export class ProductCategoryViews {
  constructor() {
    this.mainElement = document.getElementById("main");
  }

  render(title, products) {
    if (!this.mainElement) {
      return;
    }

    this.mainElement.innerHTML = "";

    const heading = document.createElement("h2");
    heading.className = "section-title";
    heading.textContent = title;

    this.mainElement.appendChild(heading);

    if (!products.length) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = "No hay productos disponibles en esta categoría.";
      this.mainElement.appendChild(empty);
      return;
    }

    const grid = document.createElement("div");
    grid.className = "product-grid";

    products.forEach((product) => {
      const card = document.createElement("article");
      card.className = "product-card";

      if (product.featured) {
        const badge = document.createElement("span");
        badge.className = "badge";
        badge.textContent = "Destacado";
        card.appendChild(badge);
      }

      const name = document.createElement("h3");
      name.textContent = product.name;

      const description = document.createElement("p");
      description.className = "product-meta";
      description.textContent = product.description;

      const price = document.createElement("div");
      price.className = "product-price";
      price.textContent = `€ ${product.price.toFixed(2)}`;

      const category = document.createElement("div");
      category.className = "product-meta";
      category.textContent = product.category;

      card.appendChild(name);
      card.appendChild(description);
      card.appendChild(price);
      card.appendChild(category);

      grid.appendChild(card);
    });

    this.mainElement.appendChild(grid);
  }
}