import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setCity } from 'src/app/supplies/app.actions';
import { CacheService } from 'src/app/supplies/services/cache.service';
import { CitiesService } from 'src/app/supplies/services/cities.service';
import { WeatherService } from 'src/app/supplies/services/weather.service';
import { City } from 'src/app/supplies/ua';

@Component({
  selector: 'app-navbar-search',
  templateUrl: './navbar-search.component.html',
  styleUrls: ['./navbar-search.component.scss']
})
export class NavbarSearchComponent {



  @Input() openAutoSel: boolean | undefined;
  subscribtion: any;

  myControl = new FormControl('');
  options: City[] = [];

  constructor(private weatherService:WeatherService,
              private citySearchService: CitiesService,
              private store:Store,
              private cache:CacheService){}

  ngOnInit() {
  }

  onCitySearch(city: string){
   this.options = this.citySearchService.searchForTheCityAutoSel(city);
  }

  onCitySelect(city:any){
    if (this.cache.checkIfCached(city)) {
      console.log('goes to cache');
      const cityCard = this.cache.getFromCash(city)!;
      this.store.dispatch(setCity({ value: cityCard }))
    }else{
      this.subscribtion = this.weatherService.searchForCityWeather(city).subscribe({
        next: (res) => {
          this.store.dispatch(setCity({ value: res }));
          this.cache.saveToCache(res);
          this.cache.cityAddedEvent.emit(true);
      },
        error: (rej) => {console.error(rej)}
      });
      this.subscribtion;
    }
  }

  ngOnDestroy(){
    this.subscribtion.unsubscribe()
  }

}
