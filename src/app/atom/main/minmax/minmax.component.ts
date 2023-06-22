import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-minmax',
  templateUrl: './minmax.component.html',
  styleUrls: ['./minmax.component.scss']
})
export class MinmaxComponent {
  @Input() minmax: any;
}
