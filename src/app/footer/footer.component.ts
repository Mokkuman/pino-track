import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; //para ngModel
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  searchValue = '';

  constructor(private router: Router){}

  onSearchChange(event: any){
    console.log(event.target.value);
  }
  goToPage(pageName: string){
    this.router.navigate([`${pageName}`]);
  }
}
//https://medium.com/@deepachaurasia33/how-to-show-or-hide-component-on-basis-of-route-in-angular-a5c691b099fa