import { Component } from '@angular/core';
import { PrivacidadComponent } from './pages/privacidad/privacidad.component';

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [PrivacidadComponent],
  templateUrl: './config.component.html',
  styleUrl: './config.component.css'
})
export class ConfigComponent {

}
