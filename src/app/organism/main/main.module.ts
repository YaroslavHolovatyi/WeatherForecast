import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainHeaderComponent } from 'src/app/molecula/main/main-header/main-header.component';
import { MainDaytimeComponent } from 'src/app/molecula/main/main-daytime/main-daytime.component';
import { MainAssetsComponent } from 'src/app/molecula/main/main-assets/main-assets.component';
import { DateComponent } from 'src/app/atom/main/date/date.component';
import { TempComponent } from 'src/app/atom/main/temp/temp.component';
import { CloudsComponent } from 'src/app/atom/main/clouds/clouds.component';
import { FeelsComponent } from 'src/app/atom/main/feels/feels.component';
import { DescriptionComponent } from 'src/app/atom/main/description/description.component';
import { MinmaxComponent } from 'src/app/atom/main/minmax/minmax.component';
import { AssetComponent } from 'src/app/atom/main/asset/asset.component';
import { CachedInfoComponent } from 'src/app/molecula/main/cached-info/cached-info.component';



@NgModule({
  declarations: [
    MainComponent,
    MainHeaderComponent,
    MainDaytimeComponent,
    MainAssetsComponent,
    DateComponent,
    TempComponent,
    CloudsComponent,
    FeelsComponent,
    DescriptionComponent,
    MinmaxComponent,
    AssetComponent,
    CachedInfoComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent,
    MainHeaderComponent,
    MainDaytimeComponent,
    MainAssetsComponent,
    DateComponent,
    TempComponent,
    CloudsComponent,
    FeelsComponent,
    DescriptionComponent,
    MinmaxComponent,
    AssetComponent,
    CachedInfoComponent,
  ]
})
export class MainModule { }
