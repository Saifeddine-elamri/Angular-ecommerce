import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  // Propriétés pour récupérer les informations de l'utilisateur
  name: string = '';
  email: string = '';

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }

  // Récupérer les articles du panier
  getCartItems() {
    return this.cartService.getCartItems();
  }

  // Obtenir le total du panier
  getTotal() {
    return this.cartService.getTotal();
  }

  // Méthode pour valider la commande
  validateOrder() {
    if (this.name && this.email) {
      // Affichage des informations de commande (vous pouvez utiliser une API ici pour sauvegarder)
      console.log("Commande validée");
      console.log("Nom: ", this.name);
      console.log("Email: ", this.email);
      console.log("Articles: ", this.getCartItems());
      console.log("Total: ", this.getTotal());

      // Réinitialiser le panier après validation
      this.cartService.clearCart();
      this.router.navigate(['/confirmation']);  // Rediriger vers une page de confirmation
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }
}
