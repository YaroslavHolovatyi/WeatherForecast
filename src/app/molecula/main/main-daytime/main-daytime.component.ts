import { Component, Input } from '@angular/core';
import { CityCard } from 'src/app/supplies/interfaces/city-info.interface';

@Component({
  selector: 'app-main-daytime',
  templateUrl: './main-daytime.component.html',
  styleUrls: ['./main-daytime.component.scss']
})
export class MainDaytimeComponent {
  @Input() city: any;
}
