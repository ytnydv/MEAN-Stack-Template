import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { JsonplaceholderComponent } from './jsonplaceholder/jsonplaceholder.component';
import { WinesComponent } from './wines/wines.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'jsonplaceholder',
        component: JsonplaceholderComponent
    },
    {
        path: 'wines-page',
        component: WinesComponent
    },    
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);