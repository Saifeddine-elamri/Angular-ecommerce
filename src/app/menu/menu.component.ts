import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product.service'; 
import { FormsModule } from '@angular/forms';
import { HttpClient , HttpResponse} from '@angular/common/http';

@Component({
    selector: 'app-menu',
    imports: [
        CommonModule, RouterLink , FormsModule
    ],
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    fullResponse: any;   // Pour stocker la réponse complète

  products: any[] = []; 
  // Variable pour gérer l'affichage du panier
  isCartVisible: boolean = false;

  private cartService = inject(CartService);
  private productService = inject(ProductService); 
  private http=inject(HttpClient);
  categories = [
    { id: 1, name: 'Pizza' },
    { id: 2, name: 'Pasta' },
    { id: 3, name: 'Salad' },
    { id: 4, name: 'Dessert' }
  ];
  selectedCategory: number = 1; // Par défaut, on sélectionne la catégorie 'Pizza'

  ngOnInit(): void {

    this.http.get('http://127.0.0.1:8000/api/products', { observe: 'response' }).subscribe(
      (response: HttpResponse<any>) => {
        console.log('Réponse complète:', response);  // Afficher la réponse complète dans la console
        this.fullResponse = response;               // Stocker la réponse complète
        console.log('Réponse contenu:', response.body);  // Afficher la réponse complète dans la console
      },
      (error) => {
        console.error('Erreur lors du chargement des produits :', error); // Afficher l'erreur en cas de problème
      }
    );

    this.productService.getProducts().subscribe(
      (data) => {
        console.log(data);
        this.products = data; // Stocker les produits récupérés
      },
      (error) => {
        console.error('Erreur lors du chargement des produits :', error);
      }
    );
  }
  // Méthode pour changer la catégorie sélectionnée
  selectCategory(categoryId: number) {
    this.selectedCategory = categoryId;
  }

    // Méthode pour obtenir le logo de la catégorie
    getCategoryLogo(categoryId: number): string {
      switch (categoryId) {
        case 1: return './pizza-logo.jpg';
        case 2: return './pasta-logo.jpg';
        case 3: return './salad-logo.jpg';
        case 4: return './dessert-logo.jpg';
        default: return '';
      }
    }

  getCategoryName(categoryId: number): string {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.name : '';
  }

  getFilteredProducts() {
    return this.products.filter(product => product.category.id === this.selectedCategory);
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
  isScrollButtonVisible = false;

  // Écouteur de défilement pour afficher ou masquer le bouton
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    this.isScrollButtonVisible = scrollPosition > 1500; // Affiche le bouton si on dépasse 200px
  }

  // Fonction pour scroller vers le haut
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


 
  
}
