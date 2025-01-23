import { Injectable } from '@angular/core';


export interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
}


@Injectable({
  providedIn: 'root'  
})
export class CartService {

  private cartItems: any[] = [];  // Le tableau des éléments dans le panier
  private items: CartItem[] = [];  // Tableau pour stocker les articles du panier

  constructor() { }

  // Ajouter un produit au panier
  addToCart(product: any) {
    const itemIndex = this.cartItems.findIndex(item => item.id === product.id);
    if (itemIndex === -1) {
      this.cartItems.push({ ...product, quantity: 1 });
    } else {
      this.cartItems[itemIndex].quantity += 1;
    }
  }

  // Retirer un produit du panier
  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
  }

  // Obtenir tous les articles dans le panier
  getCartItems() {
    return this.cartItems;
  }

  // Obtenir le total du panier
  getTotal() {

    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // Vider le panier
  clearCart() {
    this.cartItems = [];
  }

  // Calculer le total du panier
  calculateTotal(): number {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}




