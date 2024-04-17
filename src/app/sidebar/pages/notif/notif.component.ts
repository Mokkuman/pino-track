import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notif',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './notif.component.html',
  styleUrl: './notif.component.css'
})
export class NotifComponent {
  display = false;

  //Funcion para backend
  checkValue(event: any){
    console.log(event.currentTarget.id); //id de checkbutton para back 🥴
    console.log(event.currentTarget.checked); //isChecked ?
  }
}