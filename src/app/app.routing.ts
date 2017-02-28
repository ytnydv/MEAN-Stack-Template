import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { JsonplaceholderComponent } from './jsonplaceholder/jsonplaceholder.component';
import { PostsComponent } from './posts/posts.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
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
        path: 'posts',
        component: PostsComponent
    },    
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);