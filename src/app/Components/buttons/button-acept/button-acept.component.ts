import { Component } from '@angular/core';

@Component({
  selector: 'app-button-acept',
  standalone: true,
  imports: [],
  templateUrl: './button-acept.component.html',
  styleUrl: './button-acept.component.css'
})
export class ButtonAceptComponent {

  onClick(){
    const title = "¡Atención!";
    const message = "Has dado click en el boton Aceptar.";
    alert(title + "\n\n" + message);
  }
}
