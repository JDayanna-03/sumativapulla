import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-dark-mode',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './button-dark-mode.component.html',
  styleUrls: ['./button-dark-mode.component.css']
})
export class ButtonDarkModeComponent {
  @Output() darkModeToggle = new EventEmitter<void>();
  isDarkMode = false; // Track dark mode state


  toggle() {
    this.isDarkMode = !this.isDarkMode;  // Toggle dark mode state
    this.darkModeToggle.emit();
  }
}