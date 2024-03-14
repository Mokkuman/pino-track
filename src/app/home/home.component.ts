import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { MapComponent } from '../map/map.component';
import { LoadingComponent } from '../map/components/loading/loading.component';
import { MapViewComponent } from '../map/components/map-view/map-view.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, SidebarComponent, FooterComponent,MapComponent, LoadingComponent,MapViewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
