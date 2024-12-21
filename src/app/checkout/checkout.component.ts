import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
// import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrderService } from '../order.service'; // Importer le service de commande
import { Observable } from 'rxjs';

interface CartItem {
  name: string;        // Nom de l'article
  price: number;       // Prix de l'article
  quantity: number;    // Quantité de l'article
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  // Propriétés pour récupérer les informations de l'utilisateur
  name: string = '';
  email: string = '';
  address: string = '';  // Ajout de l'adresse
  cartItems: CartItem[] = [];  // Tableau d'objets CartItem
  totalPrice: number = 0; 

  constructor(
    private cartService: CartService, 
  //  private router: Router,
    private orderService: OrderService // Injecter le service de commande
  ) { }

  ngOnInit() {
    // Récupérer les articles du panier et le total
    this.cartItems = this.cartService.getCartItems();  // Appelez la méthode pour obtenir les articles du panier
    this.totalPrice = this.cartService.calculateTotal(); // Appelez la méthode pour obtenir le total
  }

  // Méthode pour valider la commande
/*  validateOrder() {
    if (this.name && this.email && this.address) {
      // Créer l'objet de la commande à envoyer au backend
      const orderData = {
        name: this.name,
        email: this.email,
        address: this.address,
        items: this.cartItems,
        total: this.totalPrice
      };

      // Appeler le service pour envoyer la commande au backend
      this.placeOrder(orderData).subscribe(
        response => {
          console.log("Commande validée", response);
          // Réinitialiser le panier après validation
          this.cartService.clearCart();
          // Rediriger vers une page de confirmation ou de succès
          this.router.navigate(['/confirmation']);  
        },
        error => {
          console.error("Erreur lors de la validation de la commande", error);
          alert('Une erreur est survenue lors de la validation de la commande.');
        }
      );
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }
*/
  // Méthode pour envoyer la commande via le service HTTP
 /* placeOrder(orderData: any): Observable<any> {
    return this.orderService.createOrder(orderData);
  }
  
  */
}
