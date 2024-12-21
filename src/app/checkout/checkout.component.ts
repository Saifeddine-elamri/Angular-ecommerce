import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../cart.service';
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Importation du module HttpClient
import { HttpClient } from '@angular/common/http';  // Importer HttpClient pour faire des requêtes HTTP

@Component({
  selector: 'app-checkout',
  standalone : true,
  imports :[CommonModule ,HttpClientModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems: CartItem[] = [];  // Stocke les articles du panier
  total: number = 0;  // Total du panier

  // Informations du client pour la commande
  customerName: string = '';
  customerEmail: string = '';
  customerAddress: string = '';

  constructor(private cartService: CartService, private http: HttpClient) {}

  ngOnInit(): void {
    // Récupérer les articles du panier au démarrage
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  // Calculer le total du panier
  calculateTotal(): void {
    this.total = this.cartService.getTotal();
  }

 // Déclaration des champs du formulaire
  name: string = '';
  email: string = '';
  address: string = '';

  // L'URL de votre API pour soumettre la commande
  private apiUrl = 'http://localhost:3004/api/checkout';  // Remplacez cette URL par votre API réelle


  // Méthode appelée lors de la soumission du formulaire
  submitOrder(): void {
    // Créer un objet avec les données du formulaire
    const orderData = {
      name: this.name,
      email: this.email,
      address: this.address
    };

    // Appel de l'API avec une requête POST pour soumettre la commande
    this.http.post(this.apiUrl, orderData).subscribe(
      (response) => {
        // Si la requête réussit, gérez la réponse
        console.log('Commande réussie', response);
        alert('Commande confirmée!');
      },
      (error) => {
        // Si la requête échoue, gérez l'erreur
        console.error('Erreur lors de la commande', error);
        alert('Erreur lors de la commande. Essayez à nouveau.');
      }
    );
  }
  
  
  
  
  }
