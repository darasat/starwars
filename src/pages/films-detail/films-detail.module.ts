import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmsDetailPage } from './films-detail';

@NgModule({
  declarations: [
    FilmsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmsDetailPage),
  ],
})
export class FilmsDetailPageModule {}
