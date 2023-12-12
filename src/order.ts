interface Menu {
    id: number;
    name: string;
    description: string;
    diet: string;
    day_of_week: number;
    week_number: number;
  }

  interface CartItem {
    name: string;
    quantity: number;
  }


  let menuData: Menu[] = [];


  function getWeekNumber(date: Date): number {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  }

  function getWeekDay(date: Date): number {
    const monday = new Date('December 4, 2023 00:00:00');
    return monday.getDay();
  }


  function getWeekDayName(day: number): string {
    const days = [
      "Maanantai",
      "Tiistai",
      "Keskiviikko",
      "Torstai",
      "Perjantai",
      "Lauantai",
      "Sunnuntai",
    ];
    return days[day];
  }


  const getMenuData = async (): Promise<Menu[]> => {
    try {
      const response = await fetch("http://localhost:3000/api/menu");
      const data = await response.json();
      menuData = data;
      return data;
    } catch (error) {
      console.error("Error fetching menu data:", error);
      return [];
    }
  };

  const displayMenu = async (weekday: number, weeknumber: number, container: HTMLElement): Promise<void> => {
    const menuData = await getMenuData();
    const menuContainer = container;

    const filteredMenu = menuData.filter(
      (menu) =>
        menu.day_of_week === weekday &&
        menu.week_number === weeknumber
    );

    const day = document.createElement("h2");
    day.innerText = getWeekDayName(filteredMenu[0].day_of_week - 1);
    if (menuContainer) {
      menuContainer.appendChild(day);
    }

    filteredMenu.forEach((menu) => {
      const menuCard = document.createElement("div");
      menuCard.classList.add("menu-card");

      const name = document.createElement("h3");
      name.innerHTML = menu.name;

      const desc = document.createElement("p");
      desc.innerHTML = menu.description;

      const diet = document.createElement("h4");
      diet.innerHTML = menu.diet;

      const quantityInput = document.createElement("input");
      quantityInput.type = "number";
      quantityInput.value = "1";
      quantityInput.classList.add("quantity-input");

      const addToCartButton = document.createElement("button");
      addToCartButton.classList.add("addToCartButton");
      addToCartButton.innerText = "Add to Cart";

      menuCard.appendChild(name);
      menuCard.appendChild(desc);
      menuCard.appendChild(diet);
      menuCard.appendChild(quantityInput);
      menuCard.appendChild(addToCartButton);

      if (menuContainer) {
        menuContainer.appendChild(menuCard);
      }
    });
  };

  class ShoppingCart {
    private items: CartItem[] = [];

    addToCart(menu: Menu, quantity: number) {
      const existingItem = this.items.find((item) => item.name === menu.name);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({ name: menu.name, quantity });
      }
      this.displayCart();
    }

    removeFromCart(menu: Menu) {
      const existingItemIndex = this.items.findIndex((item) => item.name === menu.name);
      if (existingItemIndex !== -1) {
        this.items.splice(existingItemIndex, 1);
      }
      this.displayCart();
    }

    displayCart() {
      const cartContainer = document.querySelector(".cart-container");
      if (cartContainer) {
        cartContainer.innerHTML = '';
        for (let item of this.items) {
          const itemElement = document.createElement('div');
          itemElement.classList.add('cart-item');

          const itemNameElement = document.createElement('p');
          itemNameElement.innerText = `${item.name} (Quantity: ${item.quantity})`;

          const removeButton = document.createElement('button');
          removeButton.classList.add('removeFromCartButton');
          removeButton.innerText = 'Remove from Cart';

          itemElement.appendChild(itemNameElement);
          itemElement.appendChild(removeButton);

          cartContainer.appendChild(itemElement);

          removeButton.addEventListener('click', () => {
            const selectedMenu = menuData.find((menu) => menu.name === item.name);
            if (selectedMenu) {
              this.removeFromCart(selectedMenu);
            }
          });
        }
      }
    }
  }

  const currentDate = new Date();
  const currentDayOfWeek = getWeekDay(currentDate);
  const currentWeekNumber = getWeekNumber(currentDate);

  displayMenu(currentDayOfWeek, currentWeekNumber, document.querySelector(".menu-container"));

  for (let i = 1; i < 8; i++) {
    displayMenu(i, currentWeekNumber, document.querySelector(".weeklyLunch-right"));
  }

  const shoppingCart = new ShoppingCart();

  const menuContainer = document.querySelector(".menu-container");
  menuContainer.addEventListener('click', (event) => {
    const clickedElement = event.target as HTMLElement;

    if (clickedElement.classList.contains('addToCartButton')) {
      const menuCard = clickedElement.closest('.menu-card');

      if (menuCard) {
        const menuNameElement = menuCard.querySelector('h3');
        const quantityInput = menuCard.querySelector('.quantity-input') as HTMLInputElement;

        const selectedMenuName = menuNameElement?.innerHTML || '';
        const selectedQuantity = parseInt(quantityInput.value, 10) || 1;

        const selectedMenu = menuData.find((menu) => menu.name === selectedMenuName);

        if (selectedMenu) {
          shoppingCart.addToCart(selectedMenu, selectedQuantity);
        }
      }
    }
  });

  const cartContainer = document.createElement("div");
  cartContainer.classList.add("cart-container");
  document.body.appendChild(cartContainer);
