import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ConfigComponent } from './pages/config/config.component';
import { NotifComponent } from './pages/notif/notif.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule, LoginComponent, AboutComponent,ConfigComponent, NotifComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  public sidebarOpened:boolean = false;

  constructor(private elementRef: ElementRef){}

  toggleSidebar(){
    this.sidebarOpened = !this.sidebarOpened;
    console.log(this.sidebarOpened);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.sidebarOpened = false;
    }
  }
  
}
