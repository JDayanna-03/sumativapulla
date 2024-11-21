import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-texto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-texto.component.html',
  styleUrl: './input-texto.component.css'
})
export class InputTextoComponent {
  @Output() textChange = new EventEmitter<string>(); // Emisor de evento

  text: string = ''; // Almacena el texto ingresado
  onTextChange() {
    this.textChange.emit(this.text); // Emite el nuevo valor del texto
  }

  // Función para validar que solo se ingresen letras y espacios
  validarTexto(event: any) {
    const regex = /^[A-Za-z\s]*$/; // Solo permite letras y espacios

    if (!regex.test(event.target.value)) {
      this.text = event.target.value.slice(0, -1); // Elimina el último carácter no válido
    }
  }

}
