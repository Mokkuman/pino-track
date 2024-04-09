import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  showFooter: boolean = false;
  constructor(private router: Router) { 
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event:any) =>{

      // double negation !! coerce the RegExpMatchArray to a boolean value. 
      //This ensures that shouldShowFooter() returns true if there's a match and false otherwise.
      this.showFooter = event.url === '/' || !!event.url.match(/^\/last\/\d+$/) || !!event.url.match(/^\/favs\/\d+$/);
      console.log(event,'check event function' , typeof event , event.url);
    });
  }

}
