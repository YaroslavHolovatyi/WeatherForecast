import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CityCard } from '../interfaces/city-info.interface';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  cities: CityCard[] = [];
  chosenCities: CityCard[] = [];
  appID = '&APPID=';
  units='&units=metric';

  private APPID: string;
  private API_URL: string;
  private GEO_URL: string;

  constructor(private _http: HttpClient) { 
    console.log('Weather Items Service Init...');
    this.APPID = '13c04b432dde96a8e08c59a68a4c0b12';
    this.API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
    this.GEO_URL = 'http://api.openweathermap.org/geo/1.0/reverse?lat=';

  }

  searchForCityWeather(cityName:string):Observable<any>{
    console.log('searchForCityWeather: ' + cityName);
    return this._http.get<CityCard>(this.API_URL + cityName + this.appID + this.APPID + this.units);
  }
  
  searchForLocation(longitude:number, latitude: number):Observable<any>{
    return this._http.get<CityCard>(this.GEO_URL + latitude + '&lon=' + longitude + '&APPID=' + this.APPID);
  }


}