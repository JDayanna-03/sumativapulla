import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-contrasena',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './input-contrasena.component.html',
  styleUrl: './input-contrasena.component.css'
})
export class InputContrasenaComponent {
  @Output() passwordChange = new EventEmitter<string>();

  password: string = '';

  onPasswordChange() {
    this.passwordChange.emit(this.password);
  }
  
  isPasswordVisible: boolean = false;

  // Cambia el estado de visibilidad de la contraseña
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
