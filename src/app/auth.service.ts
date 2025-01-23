import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
private apiUrl = 'http://localhost:8000/api/login';  // L'URL de ton API Symfony
private http=inject(HttpClient);

  

  login(email: string, password: string) {
    return this.http.post<any>(this.apiUrl, { email, password }).subscribe({
      next: (response) => {
        localStorage.setItem('token_id', JSON.stringify({ token: response.token }));
      },
      error: (err) => {
        console.error('Login failed', err);
      }
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }



}



  

