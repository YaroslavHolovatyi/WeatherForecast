import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/supplies/app.state';
import { WeatherService } from 'src/app/supplies/services/weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  cityToUse: any;
  cityStore$: Observable<any>;

  constructor(private store: Store<AppState>,
    private weatherService: WeatherService) {
    this.cityStore$ = store;
  }

  ngOnInit(){
    this.firstCity();
    this.cityStore$.subscribe({
      next: (res) => {this.cityToUse = res.app.value;
      console.log(this.cityToUse)},
      error: (rej)=>{console.log(rej)}
    });
  }

  firstCity(){
    this.weatherService.searchForCityWeather("Lviv").subscribe({
      next: (res) => {
       this.cityToUse = res;
    },
      error: (rej) => {console.error(rej)}
    });
  }
  
}
