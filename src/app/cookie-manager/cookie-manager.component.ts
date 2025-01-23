import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-manager',
  imports: [],
  templateUrl: './cookie-manager.component.html',
  styleUrl: './cookie-manager.component.css'
})
export class CookieManagerComponent {
  constructor() { }

  // Fonction pour créer un cookie
  setCookie(name: string, value: string, days: number): void {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000)); // Calcul de l'expiration
    const expiresString = "expires=" + expires.toUTCString();
    document.cookie = `${name}=${value};${expiresString};path=/`; // Le cookie est accessible pour toute l'application
    console.log(`Cookie '${name}' set!`);
  }

  // Fonction pour obtenir un cookie par son nom
  getCookie(name: string): string | null {
    const nameEq = name + "=";
    const cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(nameEq) === 0) {
        return cookie.substring(nameEq.length, cookie.length);
      }
    }
    return null; // Si le cookie n'est pas trouvé
  }

  // Fonction pour supprimer un cookie
  deleteCookie(name: string): void {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    console.log(`Cookie '${name}' deleted!`);
}

setsession(name: string, value: string): void {
sessionStorage.setItem(name,value);
}
}