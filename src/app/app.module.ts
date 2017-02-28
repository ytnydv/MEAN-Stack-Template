import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmployeesComponent } from './employees/employees.component';
import { JsonplaceholderComponent } from './jsonplaceholder/jsonplaceholder.component';

import { JPostService } from './jsonplaceholder/service.service';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EmployeesComponent,
    JsonplaceholderComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ JPostService, PostsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
