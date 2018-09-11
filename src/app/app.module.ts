import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'; 

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { VehiclesPage } from '../pages/vehicles/vehicles';
import { StarshipsPage } from '../pages/starships/starships';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SwapiProvider } from '../providers/swapi/swapi';
import { HttpModule } from '@angular/http';
import { FilmsDetailPage } from '../pages/films-detail/films-detail';

import { ModalPage } from '../pages/modal/modal';
import {SwapiCharacters} from "../providers/swapi/swapi-characters";
import { FcmProvider } from '../providers/fcm/fcm';

import { Firebase } from '@ionic-native/firebase';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FilmsDetailPage,
    ModalPage,
    VehiclesPage,
    StarshipsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FilmsDetailPage,
    ModalPage,
    VehiclesPage,
    StarshipsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SwapiProvider,
    SwapiCharacters
  ]
})
export class AppModule {}
