import { Component } from '@angular/core';
import { PlacesService } from '../../../services/places.service';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [GoogleMap, GoogleMapsModule],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent {
  // constructor( private placesService: PlacesService){

  // }
  // ngOnInit(): void {
  //   console.log(this.placesService.userLocation);
  // }
}
