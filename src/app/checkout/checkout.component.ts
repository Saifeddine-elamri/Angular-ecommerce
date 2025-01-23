import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../cart.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core';

@Component({
    selector: 'app-checkout',
    imports: [CommonModule, FormsModule],
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;
  // Nouvelle propriété pour le message
  message: string = '';

  name: string = '';
  email: string = '';
  address: string = '';

  private apiUrl = 'http://127.0.0.1:8000/api/checkout';

  private http = inject(HttpClient);
  private cartService = inject(CartService);



  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.cartService.getTotal();
  }


 submitOrder(): void {
  const orderData = {
    name: this.name,
    email: this.email,
    address: this.address,
    cartItems: this.cartItems
  };

  this.http.post(this.apiUrl, orderData).subscribe(
    (response) => {
      console.log('Commande réussie', response);
      this.message = 'Commande confirmée !'; // Message de succès
    },
    (error) => {
      console.error('Erreur lors de la commande', error);

      // Vérifier l'erreur en fonction du code de statut
      if (error.status === 0) {
        this.message = "Impossible de se connecter à l'API. Vérifiez que le serveur est en cours d'exécution.";
      } else if (error.status >= 400 && error.status < 500) {
        this.message = `Erreur côté client : ${error.error.message || error.message}`;
      } else if (error.status >= 500) {
        this.message = "Erreur côté serveur. Veuillez réessayer plus tard.";
      } else {
        this.message = "Une erreur inconnue s'est produite.";
      }
    }
  );
}


}