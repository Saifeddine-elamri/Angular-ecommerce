import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
export const routes: Routes = [
   { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'contact', component: ContactComponent },
 { path: 'checkout', component: CheckoutComponent }
];