import { Component  } from '@angular/core';
import { FormsModule  } from '@angular/forms';

@Component({
  selector: 'app-button-primario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './button-primario.component.html',
  styleUrl: './button-primario.component.css'
})
export class ButtonPrimarioComponent {
  colors: string[] = ['#001A33', '#003300', '#550000', '#9E3A00', '#3B0066'];
  currentIndex: number = 0;

  changeBackgroundColor() {
    document.body.style.backgroundColor = this.colors[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.colors.length;
  }

}
