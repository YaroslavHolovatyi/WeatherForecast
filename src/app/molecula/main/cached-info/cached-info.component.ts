import { Component, EventEmitter } from '@angular/core';
import { CityCard } from 'src/app/supplies/interfaces/city-info.interface';
import { CacheService } from 'src/app/supplies/services/cache.service';

@Component({
  selector: 'app-cached-info',
  templateUrl: './cached-info.component.html',
  styleUrls: ['./cached-info.component.scss']
})
export class CachedInfoComponent {

  cachedCitiesString: CityCard[] = [];
  

  constructor(private cache: CacheService){}

  ngOnInit(){
    this.getEverythingFromCache();
    this.cache.cityAddedEvent.subscribe(event => {
      if (event) {
        this.getEverythingFromCache();
      }
    });
  }
  ngOnChange(){
    this.getEverythingFromCache();
  }

  getEverythingFromCache(){
    console.log('getEverythingFromCache starts Working')
    const cachedCities = localStorage.getItem('cachedCities');
    console.log(cachedCities)
    let cachedCitiesArray: CityCard[] = [];
    if (cachedCities !== null) {
      this.cachedCitiesString = JSON.parse(cachedCities);
    }
  }
}
