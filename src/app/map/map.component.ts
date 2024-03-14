import { Component } from '@angular/core';
import { PlacesService } from './services/places.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  constructor(private placesService: PlacesService){
    
  }
}
