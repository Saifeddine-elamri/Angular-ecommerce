import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import {RegisterComponent} from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { authguardGuard } from './authguard.guard';
import {UsersComponent} from './users/users.component';
import {CookieManagerComponent} from './cookie-manager/cookie-manager.component'

export const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'menu', component: MenuComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'checkout', component: CheckoutComponent },
{ path: 'reservation', component: ReservationComponent },
{ path: 'authentification', component: AuthentificationComponent },
{ path: 'register', component: RegisterComponent },

{ path: 'dashboard', component: DashboardComponent ,canActivate: [authguardGuard],
    children: [
    
        {
          path: 'users',
          component: UsersComponent
        }
      ]
},
{ path: 'cookie', component: CookieManagerComponent},


];