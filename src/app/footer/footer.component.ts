import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; //para ngModel
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  query = '';

  constructor(private router: Router){}

  async onSearchChange(event: any){
    console.log(event.target.value);
    this.query = event.target.value;
    if(this.query.length > 0){
      await this.getPlaces();    
    }
  }

  async getPlaces(){
    try {
      
    } catch (error) {
      
    }
  }
  goToPage(pageName: string){
    this.router.navigate([`${pageName}`]);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }
}
//https://medium.com/@deepachaurasia33/how-to-show-or-hide-component-on-basis-of-route-in-angular-a5c691b099fa