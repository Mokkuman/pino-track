import { Component } from '@angular/core';
import { PlacesService } from '../../../services/places.service';
import { GoogleMap, MapAdvancedMarker, MapMarker,  } from '@angular/google-maps';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [GoogleMap, MapMarker, MapAdvancedMarker],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent {
  userLocation: [number, number] | undefined;
  options: any;
  markerOpts: any;
  marker_pos: any;

  constructor( private placesService: PlacesService){}

  ngOnInit(): void {
    this.getUserLocation();
  }

  getUserLocation(): void {
    this.placesService.getUserLocation()
      .then(location => {
        this.userLocation = location;
        console.log("User location:", this.userLocation);

        this.options = {
          center: {lat: this.userLocation[0], lng: this.userLocation[1]},
          zoom: 16,
          mapTypeControl: false,
          streetViewControl: false,
          maxZoom: 20,
          minZoom: 8,
        };
        this.markerOpts = {draggable: false};
        this.marker_pos = {lat: this.userLocation[0], lng: this.userLocation[1]};
      })
      .catch(error => {
        console.error("Error getting user location:", error);
      });
  }
  // zoomControl: false,
  // scrollwheel: false,
  // disableDoubleClickZoom: true,
  
}
