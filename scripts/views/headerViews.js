export class headerView {
  constructor(categories, onSelect) {
    this.categories = categories;
    this.onSelect = onSelect;
    this.activeCategory = "Home";
    this.headerElement = document.getElementById("header");
  }

  setActive(categoryName) {
    this.activeCategory = categoryName;
    const buttons = this.headerElement.querySelectorAll(".category-button");
    buttons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.category === categoryName);
    });
  }

  render() {
    if (!this.headerElement) {
      return;
    }

    this.headerElement.innerHTML = "";

    const title = document.createElement("div");
    title.className = "header-title";
    title.textContent = "Supermercado Online";

    const list = document.createElement("div");
    list.className = "category-list";

    const homeButton = this.createButton("Home");
    list.appendChild(homeButton);

    this.categories.forEach((category) => {
      const button = this.createButton(category.name);
      list.appendChild(button);
    });

    this.headerElement.appendChild(title);
    this.headerElement.appendChild(list);

    this.setActive(this.activeCategory);
  }

  createButton(label) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-button";
    button.textContent = label;
    button.dataset.category = label;
    button.addEventListener("click", () => {
      this.onSelect(label);
      this.setActive(label);
    });
    return button;
  }
}