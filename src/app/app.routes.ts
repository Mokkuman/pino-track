import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './sidebar/pages/login/login.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    
];
// {
//     path: 'login',
//     component: LoginComponent
// },