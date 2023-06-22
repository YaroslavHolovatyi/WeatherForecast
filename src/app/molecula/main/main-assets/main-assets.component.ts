import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-assets',
  templateUrl: './main-assets.component.html',
  styleUrls: ['./main-assets.component.scss']
})
export class MainAssetsComponent {
 @Input() city: any;
 assets : any;

 ngOnChanges(){
  this.assets = [
    {
      assetName: 'Wind',
      assetValue: this.city.wind.speed,
      assetImg: 'ph_wind.svg'
    },
    {
      assetName: 'Pressure',
      assetValue: this.city.main.pressure,
      assetImg: 'icon-park-outline_scale-one.svg'
    },
    {
      assetName: 'Humidity',
      assetValue: this.city.main.humidity,
      assetImg: 'material-symbols_humidity-mid.svg'
    },
    {
      assetName: 'Precipitation',
      assetValue: '0.07mm',
      assetImg: 'streamline_interface-weather-rain-1-cloud-rain-rainy-meteorology-precipitation-weather.svg'
   }
  ]
 }



}
