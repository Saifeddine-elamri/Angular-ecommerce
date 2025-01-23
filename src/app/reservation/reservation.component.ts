import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-reservation',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {

  private http = inject(HttpClient);

  reservationForm!: FormGroup ;
  successMessage!: string;
  controlNames=["name","email","date","time","guests"];

  constructor(private formBuilder: FormBuilder) {
    }
  
  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      guests: [1, [Validators.required, Validators.min(2)]],
    });
}
onSubmit() {
  if (this.reservationForm.valid) {
    const reservationData = this.reservationForm.value;

    // Envoi des données vers le serveur Symfony
    this.http.post('http://127.0.0.1:8000/api/reservations', reservationData).subscribe({
      next: (response) => {
        // Si la réponse est réussie, afficher un message de succès
        this.successMessage = 'Votre réservation a été enregistrée avec succès !';
        this.reservationForm.reset(); // Réinitialiser le formulaire si nécessaire
      },
      error: (error) => {
        // Si une erreur est retournée (erreurs de validation), afficher les erreurs dans le formulaire
        if (error.status === 400 && error.error.errors) {
          const errors = error.error.errors;

          // Mettre à jour les erreurs dans le formulaire Angular
          Object.keys(errors).forEach((key) => {
            const control = this.reservationForm.get(key); // Récupérer le contrôle basé sur le nom du champ
            if (control) {
              control.setErrors({ serverError: errors[key] });
            }
          });
        }
      }
    });
  } else {
    alert('Veuillez remplir correctement le formulaire.');
  }
}


}
