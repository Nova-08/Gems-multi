import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { MessageBundle } from '@angular/compiler';
import { Menu } from './menu/menu';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Aboutus } from './aboutus/aboutus';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'homepage',
        pathMatch: 'full'
    },
    {
        path: 'homepage',
        component: Homepage
    },
    {
        path: 'app-menu', 
        component: Menu
    }, 
    {
        path: 'app-header',
        component: Header
    },
    {
        path: 'app-footer',
        component: Footer
    },
    {
        path:'app-aboutus',
        component: Aboutus
    }
];
