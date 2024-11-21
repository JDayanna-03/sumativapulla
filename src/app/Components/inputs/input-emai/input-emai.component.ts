import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-emai',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-emai.component.html',
  styleUrl: './input-emai.component.css'
})
export class InputEmaiComponent {
  @Output() emailChange = new EventEmitter<string>();

  email: string = '';
  // Expresión regular para la validación del correo electrónico
  emailPattern: string = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';

  onEmailChange() {
    this.emailChange.emit(this.email);
  }

}
