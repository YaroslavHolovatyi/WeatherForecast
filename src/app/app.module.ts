import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './supplies/material.module';
import { MainModule } from './organism/main/main.module';
import { NavbarModule } from './organism/navbar/navbar.module';
import { StoreModule } from '@ngrx/store';
import { WeatherService } from './supplies/services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { CitiesService } from './supplies/services/cities.service';
import { appReducer } from './supplies/app.reducer';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MainModule,
    NavbarModule,
    StoreModule.forRoot({app: appReducer }),
    HttpClientModule,
  ],
  providers: [WeatherService, CitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
