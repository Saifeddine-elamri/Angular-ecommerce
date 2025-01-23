import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports:[ReactiveFormsModule ,CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(formGroup: FormGroup): null | object {
    const password = formGroup.get(['password'])?.value;
    const confirmPassword = formGroup.get(['confirmPassword'])?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

 
  onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log('Registration successful', this.registerForm.value);
    // Add your logic to send form data to the server here
  }
}
