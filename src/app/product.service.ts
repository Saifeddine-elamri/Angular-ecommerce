import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://127.0.0.1:8000/api/products'; // URL de l'API

  private http = inject(HttpClient);


  // Méthode pour récupérer les produits
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
