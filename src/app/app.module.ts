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
import { WinesComponent } from './wines/wines.component';
import { WinesService } from './wines/wineservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EmployeesComponent,
    JsonplaceholderComponent,
    WinesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ JPostService,  WinesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
