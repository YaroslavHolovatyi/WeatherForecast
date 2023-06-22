import { Injectable } from '@angular/core';
import { CityData } from '../ua';


@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor() { }

  searchForTheCityAutoSel(searchString: string) {
    const filteredCities = CityData.filter(city => city.city.toLowerCase().startsWith(searchString.toLowerCase()));
    return filteredCities;
  }
}
