import { inject } from '@angular/core';
import { CanActivateFn ,Router} from '@angular/router';

export const authguardGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
// const tokenFromSource = 'example-token'; // Remplacez par votre logique pour obtenir un token
// localStorage.setItem('token', tokenFromSource);


    const isAuthenticated = !!localStorage.getItem('token'); // Exemple simple
    if (!isAuthenticated) {
      router.navigate(['/authentification']); // Redirige vers la page de connexion
      return false;
    }
    return true;
  
};
