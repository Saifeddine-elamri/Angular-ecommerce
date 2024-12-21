import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https://votre-api-url.com/orders'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  // Créer une commande en envoyant les données du panier et de la commande
  createOrder(orderData: any): Observable<any> {
    return this.http.post(this.apiUrl, orderData);
  }
}
