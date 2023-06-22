import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent {
  @Input() name: string | undefined;
  @Input() value: string | undefined;
  @Input() img: string | undefined;
  imgSrc = `../../../../../assets/images/asstes/`
}
