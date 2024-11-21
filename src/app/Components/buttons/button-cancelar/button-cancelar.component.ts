import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-cancelar',
  standalone: true,
  imports: [],
  templateUrl: './button-cancelar.component.html',
  styleUrl: './button-cancelar.component.css'
})
export class ButtonCancelarComponent {
  @Output() cancelClicked: EventEmitter<void> = new EventEmitter<void>();

  onCancel() {
    this.cancelClicked.emit();
  }

}
