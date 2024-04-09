import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MapComponent } from '../map/map.component';
import { LoadingComponent } from '../map/components/loading/loading.component';
import { MapViewComponent } from '../map/components/map-view/map-view.component';
import { PlacesService } from '../services/places.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule,MapComponent, LoadingComponent,MapViewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private placesService: PlacesService){
    
  }
  get isUserLocationReady(){
    return this.placesService.isUserLocationReady;
  }
}
