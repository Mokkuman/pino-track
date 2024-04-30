import { Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlacesService } from '../services/places.service';
import { LatestComponent } from '../footer/pages/latest/latest.component';
import { Router } from '@angular/router';
import { MapComponent } from '../map/map.component';


export interface PlaceSearchResult {
  address: string;
  location?: google.maps.LatLng;
  name?: string;
}

@Component({
  selector: 'app-direcciones',
  standalone: true,
  imports: [FormsModule, CommonModule, LatestComponent, MapComponent],
  templateUrl: './direcciones.component.html',
  styleUrl: './direcciones.component.css'
})

export class DireccionesComponent implements OnInit{

  // https://netbasal.com/autofocus-that-works-anytime-in-angular-apps-68cb89a3f057
  @ViewChild('destino',{static: false})
  destinoInput!: ElementRef;

  set destino(element: ElementRef<HTMLInputElement>){
    if(element){
      element.nativeElement.focus()
    }
  }

  @Output() placeChanged = new EventEmitter<PlaceSearchResult>();

  query:string = '';
  place:string = '';
  userLocation: [number, number] | undefined;
  address: string = '';
  geocoder = new google.maps.Geocoder();
  latlng: any;


  autocomplete: google.maps.places.Autocomplete | undefined;

  constructor(private sharedDataService: SharedDataService, private ngZone: NgZone, private placesService: PlacesService, private router: Router){}

  ngOnInit(): void {
    this.sharedDataService.inputData$.subscribe(data=>{
      this.query = data;
    });
    
    if (this.placesService.isUserLocationReady){
      this.userLocation = this.placesService.getUserLocation();
      this.latlng = new google.maps.LatLng(this.userLocation![0], this.userLocation![1]);
      this.geocoder
        .geocode({location: this.latlng})
        .then((response) => {
          if(response.results[0]){
            this.address = response.results[0].formatted_address;
          }else{
            alert("No address found");
          }
        })
        .catch((e) => alert("Geocoder failed due to: "+e));

    }else{
      this.placesService.getUserLocationService()
      .then(location => {
        // this.userLocation = location;
        // console.log("User location:", this.userLocation);
        this.latlng = new google.maps.LatLng(location[0], location[1]);
        this.geocoder
        .geocode({location: this.latlng})
        .then((response) => {
          if(response.results[0]){
            this.address = response.results[0].formatted_address;
          }else{
            alert("No address found");
          }
        })
        .catch((e) => alert("Geocoder failed due to: "+e));
      })
      .catch(error => {
        console.error("Error getting user location:", error);
      });
    }    
    
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const options = {
      country: "MX"
    }
    this.autocomplete = new google.maps.places.Autocomplete(
      this.destinoInput.nativeElement,
      {componentRestrictions:{
        country: "MX"
      }});
    
    this.autocomplete.addListener('place_changed', ()=>{
      this.ngZone.run(() =>{
        const place = this.autocomplete?.getPlace();
        console.log(place);
      //   const result: PlaceSearchResult = {
      //     address: this.destinoInput.nativeElement.value,
      //     name: place?.name,
      //     location: place?.geometry?.location,
      //   };

      //   this.placeChanged.emit(result);
      });
    });
  }

  ngOnDestroy(): void {
    if (this.autocomplete) {
      google.maps.event.clearInstanceListeners(this.autocomplete);
    }
  }

  showMap(event:any){
    this.router.navigate(['viaje']);
  }
}
