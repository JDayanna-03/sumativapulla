import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VisualizarComponent } from './Components/visualizar/visualizar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VisualizarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
