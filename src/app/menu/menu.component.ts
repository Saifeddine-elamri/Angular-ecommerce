import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
 standalone: true,
  imports: [
    CommonModule,RouterLink
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // Exemple de produits dans le menu
  products = [
    { id: 1, name: 'Pizza Margherita', price: 10 , image : './Margherita.png'},
    { id: 2, name: 'Pizza Pepperoni', price: 12 ,image : '/Pepperoni.png'},
    { id: 3, name: 'Pasta Carbonara', price: 15 , image : '/Pasta.png'},
    { id: 4, name: 'Salad Caesar', price: 8 ,image : '/Salad.png'}
  ];

  // Variable pour gérer l'affichage du panier
  isCartVisible: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  // Méthode pour ajouter un produit au panier
  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  // Méthode pour récupérer les articles dans le panier
  getCartItems() {
    return this.cartService.getCartItems();
  }

  // Méthode pour obtenir le total du panier
  getTotal() {
    return this.cartService.getTotal();
  }

  // Méthode pour vider le panier
  clearCart() {
    this.cartService.clearCart();
  }

  // Méthode pour retirer un produit du panier
  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  // Méthode pour basculer l'affichage du panier
  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
  }
}
