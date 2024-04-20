import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-favs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favs.component.html',
  styleUrl: './favs.component.css'
})
export class FavsComponent {
  places: any[] = [];

  constructor(){}
}
