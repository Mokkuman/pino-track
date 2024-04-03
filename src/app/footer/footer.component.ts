import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router){

  }
  goToPage(pageName: string){
    this.router.navigate([`${pageName}`]);
  }
}
//https://medium.com/@deepachaurasia33/how-to-show-or-hide-component-on-basis-of-route-in-angular-a5c691b099fa