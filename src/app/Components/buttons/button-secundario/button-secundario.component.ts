import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button-secundario',
  standalone: true,
  imports: [NgIf],
  templateUrl: './button-secundario.component.html',
  styleUrl: './button-secundario.component.css'
})
export class ButtonSecundarioComponent {
  isYetiVisible: boolean = false;

  showYeti() {
    this.isYetiVisible = !this.isYetiVisible;
  }
}
