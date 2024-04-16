import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './sidebar/pages/login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './sidebar/pages/about/about.component';
import { ConfigComponent } from './sidebar/pages/config/config.component';
import { NotifComponent } from './sidebar/pages/notif/notif.component';
import { SignComponent } from './sidebar/pages/sign/sign.component';
import { FavsComponent } from './footer/pages/favs/favs.component';
import { LatestComponent } from './footer/pages/latest/latest.component';
import { UpgradeComponent } from './sidebar/pages/upgrade/upgrade.component';
import { Component } from '@angular/core';
import { PrivacidadComponent } from './sidebar/pages/config/pages/privacidad/privacidad.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
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
        component: ConfigComponent,
        children: [
            {
                path: "privacidad",
                title: "privacidad",
                component: PrivacidadComponent
            }
        ]
    },
    {
        path: "notif/:idUser",
        title: "Notifications" ,
        component: NotifComponent
    },
    {
        path: "favs/:idUser",
        title: "Favorites",
        component: FavsComponent
    },
    {
        path: "last/:idUser",
        title: "Latest",
        component: LatestComponent
    },
    {
        path: "upgrade",
        title: "Upgrade",
        component: UpgradeComponent
    },
    { 
        path: '**', 
        pathMatch: 'full',
        component: PagenotfoundComponent
    },  // Wildcard route for a 404 page
];
