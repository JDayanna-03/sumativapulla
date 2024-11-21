import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonAceptComponent } from '../buttons/button-acept/button-acept.component';
import { ButtonCancelarComponent } from '../buttons/button-cancelar/button-cancelar.component';
import { ButtonPrimarioComponent } from '../buttons/button-primario/button-primario.component';
import { ButtonSecundarioComponent } from '../buttons/button-secundario/button-secundario.component';
import { InputContrasenaComponent } from '../inputs/input-contrasena/input-contrasena.component';
import { InputEmaiComponent } from '../inputs/input-emai/input-emai.component';
import { InputTextoComponent } from '../inputs/input-texto/input-texto.component';
import { ButtonDarkModeComponent } from '../buttons/button-dark-mode/button-dark-mode.component';

@Component({
  selector: 'app-visualizar',
  standalone: true,
  imports: [
    ButtonAceptComponent,
    ButtonCancelarComponent,
    ButtonPrimarioComponent,
    ButtonSecundarioComponent,
    ButtonDarkModeComponent,
    InputContrasenaComponent,
    InputEmaiComponent,
    InputTextoComponent,
  ],
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css'], // Fixed typo here
})
export class VisualizarComponent {
  isDarkMode = false;

  enteredEmail: string = '';
  enteredPassword: string = '';
  enteredText: string = '';

  @ViewChild('visualizarContainer') visualizarContainer!: ElementRef;

  // Input Change Handlers
  onPasswordChange(password: string) {
    this.enteredPassword = password;
  }

  onEmailChange(email: string) {
    this.enteredEmail = email;
  }

  onTextChange(text: string) {
    this.enteredText = text;
  }

  // Display Input Data
  displayData() {
    console.log('Email:', this.enteredEmail);
    console.log('Password:', this.enteredPassword);
    console.log('Text:', this.enteredText);
  }

  clearInputs() {
    this.onPasswordChange('');
    this.onEmailChange('');
    this.onTextChange('');
  }

  // Dark Mode Toggle
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (this.visualizarContainer) {
      this.visualizarContainer.nativeElement.classList.toggle(
        'dark-mode',
        this.isDarkMode
      );
    }
  }
}