import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
} from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeadService } from '../leads/lead.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
})
export class ContactFormComponent {
  form: FormGroup;
  isSubmitting = signal(false);
  isSuccess = signal(false);
  errorMessage = signal<string | null>(null);

  readonly countries = [
    'Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia',
    'Costa Rica', 'Ecuador', 'El Salvador', 'Guatemala',
    'Honduras', 'México', 'Nicaragua', 'Panamá', 'Paraguay',
    'Perú', 'Puerto Rico', 'República Dominicana', 'Uruguay', 'Venezuela',
    'Otro',
  ];

  private fb = inject(FormBuilder);
  private leadService = inject(LeadService);

  constructor() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      empresa: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      mensaje: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  isInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control?.invalid && control.touched);
  }

  getError(field: string): string {
    const control = this.form.get(field);
    if (!control?.errors || !control.touched) return '';
    if (control.errors['required']) return 'Este campo es obligatorio.';
    if (control.errors['email']) return 'Ingresa un email válido.';
    if (control.errors['minlength']) {
      const min = control.errors['minlength'].requiredLength;
      return `Mínimo ${min} caracteres.`;
    }
    return 'Campo inválido.';
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.errorMessage.set(null);

    this.leadService.submitLead(this.form.value).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.isSuccess.set(true);
        this.form.reset();
      },
      error: () => {
        this.isSubmitting.set(false);
        this.errorMessage.set(
          'Ocurrió un error al enviar tu mensaje. Intenta nuevamente.'
        );
      },
    });
  }
}
