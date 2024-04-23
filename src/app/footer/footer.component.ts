import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; //para ngModel
import { Router } from '@angular/router';
import { SharedDataService } from '../services/shared-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private router: Router, private sharedDataService: SharedDataService){}  
  goToPage(pageName: string){
    this.router.navigate([`${pageName}`]);
  }
  onEnter(event: any){
    if (event != null){
      // console.log(event.target.value);
      this.sharedDataService.setInputData(event.target.value);
      this.goToPage('dirs');
    }
  }

}
//https://medium.com/@deepachaurasia33/how-to-show-or-hide-component-on-basis-of-route-in-angular-a5c691b099fa