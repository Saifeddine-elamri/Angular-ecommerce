import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';  // Importation du composant Navbar
import { HeaderComponent } from './header/header.component';  // Importation du composant Navbar
import { FooterComponent } from './footer/footer.component';  // Importation du composant Navbar

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'restaurant-site';
}
