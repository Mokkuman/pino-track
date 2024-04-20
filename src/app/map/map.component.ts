import { Component } from '@angular/core';
import { PlacesService } from '../services/places.service';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMapsModule,GoogleMap],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  constructor(private placesService: PlacesService){
    
  }
}
