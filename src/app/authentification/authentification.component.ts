import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authentification',
  imports: [FormsModule],
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.css'
})
export class AuthentificationComponent {
  credentials = {
    username: '',
    password: ''
  };

  onSubmit() {
    if (this.credentials.username && this.credentials.password) {
      console.log('Login successful!', this.credentials);
      // Handle authentication logic here
    } else {
      console.log('Please fill in all fields.');
    }
  }
}
