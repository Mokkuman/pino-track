import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ConfigComponent } from './pages/config/config.component';
import { NotifComponent } from './pages/notif/notif.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, LoginComponent, AboutComponent,ConfigComponent, NotifComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  
}
