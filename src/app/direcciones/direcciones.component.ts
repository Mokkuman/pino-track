import { Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


export interface PlaceSearchResult {
  address: string;
  location?: google.maps.LatLng;
  name?: string;
}

@Component({
  selector: 'app-direcciones',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  autocomplete: google.maps.places.Autocomplete | undefined;

  constructor(private sharedDataService: SharedDataService, private ngZone: NgZone){}

  ngOnInit(): void {
    this.sharedDataService.inputData$.subscribe(data=>{
      this.query = data;
    });

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
}
