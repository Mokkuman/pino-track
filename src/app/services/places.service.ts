import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  public userLocation?: [number, number]; //? indica que es opcional
  
  
  get isUserLocationReady(): boolean{
    return !!this.userLocation;
  }

  constructor() { 
    this.getUserLocationService();
  }

  public getUserLocationService():Promise <[number, number]>{

    return new Promise ((resolve, reject) =>{
      //tiene la posicion como se va moviendo
      navigator.geolocation.watchPosition(
        ({coords}) => {
          // this.userLocation = [coords.longitude, coords.latitude];//para mapbox
          this.userLocation = [coords.latitude, coords.longitude];//para mapbox
          resolve(this.userLocation);
        },
        (err) => {
          alert("No se ha podido obtener la geolocalización");
          console.log(err);
          reject();
        }
        // ({coords}) => resolve([coords.latitude, coords.longitude]) //para google maps

      );
      // navigator.geolocation.getCurrentPosition(); //solo lo toma una vez
    });
  }

  public getPlacesByQuery(query: string = ''){
    // todo: cuando query es vacio, que sea required el campo y que muestre alerta
    // this.http.get()
  }
}
