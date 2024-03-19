import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './sidebar/pages/login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './sidebar/pages/about/about.component';
import { ConfigComponent } from './sidebar/pages/config/config.component';
import { NotifComponent } from './sidebar/pages/notif/notif.component';
import { SignComponent } from './sidebar/pages/sign/sign.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signIn',
        component: SignComponent
    },
    {
        path: "about",
        title: "About Page",
        component: AboutComponent,
    },
    {
        path: "config/:idUser",
        title: "Configuration", 
        component: ConfigComponent
    },
];
// {
//     path: '/',
//     component: SidebarComponent,
//     children:[
//         {
//             path: "about",
//             title: "About Page",
//             component: AboutComponent,
//         },
//         {
//             path: "login",
//             title: "Login Page",
//             component: LoginComponent,
//         },
//         {
//             path: "config/:idUser",
//             title: "Configuration", 
//             component: ConfigComponent
//         },
//         {
//             path: "notif/:idUser",
//             title: "Notifications" ,
//             component: NotifComponent
//         },
//     ],
// },