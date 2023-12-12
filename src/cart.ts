// interface CartItem {
//     name: string;
//     quantity: number;
//     size?: string;
//     options?: string[];
//   }

//   interface Menu {
//     id: number;
//     name: string;
//     description: string;
//     diet: string;
//     day_of_week: number;
//     week_number: number;
//   }

//   class ShoppingCart {
//     private items: CartItem[] = [];


//     addToCart(item: CartItem) {
//       const existingItem = this.items.find(i => i.name === item.name && i.size === item.size && JSON.stringify(i.options) === JSON.stringify(item.options));
//       if (existingItem) {
//         existingItem.quantity += item.quantity;
//       } else {
//         this.items.push(item);
//       }
//     }

//     removeFromCart(item: CartItem) {
//       const index = this.items.findIndex(i => i.name === item.name && i.size === item.size && JSON.stringify(i.options) === JSON.stringify(item.options));
//       if (index !== -1) {
//         this.items.splice(index, 1);
//       }
//     }

//     displayCart(container: HTMLElement) {
//       container.innerHTML = '';
//       for (let item of this.items) {
//         const itemElement = document.createElement('p');
//         itemElement.innerText = `${item.name} (Quantity: ${item.quantity}, Size: ${item.size}, Options: ${item.options?.join(', ')})`;
//         container.appendChild(itemElement);
//       }
//     }
//   }

//   const cart = new ShoppingCart();

//   // Add event listeners to the add-to-cart buttons
//   document.querySelectorAll('.add-to-cart').forEach(button => {
//     button.addEventListener('click', function() {
//       const item: CartItem = {
//         name: this.getAttribute('data-name')!,
//         quantity: Number(this.getAttribute('data-quantity')),
//         size: this.getAttribute('data-size'),
//         options: this.getAttribute('data-options')?.split(',')
//       };
//       cart.addToCart(item);
//       cart.displayCart(document.getElementById('cart')!);
//     });
//   });

//   // Add event listeners to the remove-from-cart buttons
//   document.querySelectorAll('.remove-from-cart').forEach(button => {
//     button.addEventListener('click', function() {
//       const item: CartItem = {
//         name: this.getAttribute('data-name')!,
//         size: this.getAttribute('data-size'),
//         options: this.getAttribute('data-options')?.split(',')
//       };
//       cart.removeFromCart(item);
//       cart.displayCart(document.getElementById('cart')!);
//     });
//   });
