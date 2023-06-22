import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-clouds',
  templateUrl: './clouds.component.html',
  styleUrls: ['./clouds.component.scss']
})
export class CloudsComponent {
  @Input() clouds: any;

  neededImage: string = '';
  imageFolder: string = '../../../assets/images/';
  fullImage = '';

  ngOnInit(){
    this.checkNeededImg(this.clouds);
    this.fullImage = this.imageFolder + this.neededImage;
  }

  ngOnChanges(){
    this.checkNeededImg(this.clouds);
    this.fullImage = this.imageFolder + this.neededImage;
  }

  checkNeededImg(img: string){
    switch(img){
      case 'clear sky':
        this.neededImage = 'Sunny.svg';
        break;
      case 'few clouds':
        this.neededImage = 'Sun + Cloud.svg';
        break;
      case 'broken clouds':
        this.neededImage = 'Sun + Cloud.svg';
        break;
      case 'scattered clouds':
        this.neededImage = 'Cloudly.svg';
        break;
      case 'shower rain':
        this.neededImage = 'Very Rainy.svg';
        break;
      case 'rain':
        this.neededImage = 'Small Rain.svg';
        break;
      case 'thunderstorm':
        this.neededImage = 'Thunderstorm + rain.svg';
        break;
      case 'snow':
        this.neededImage = 'Snow.svg';
        break;
      case 'mist':
        this.neededImage = 'Fog.svg';
        break;
    }
  }

}
