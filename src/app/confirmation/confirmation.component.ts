import { Component } from '@angular/core';

@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.css'],
    standalone: false
})
export class ConfirmationComponent {
  message: string = 'Merci pour votre commande !';
}
