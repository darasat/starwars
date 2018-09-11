import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {Character} from "../../models/Character";
import {SwapiProvider} from "../../providers/swapi/swapi";

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  private character: Character;
  public id;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private view:ViewController, public swapi: SwapiProvider) {
    this.character = navParams.get('character');
    swapi.getCharacterById(this.character)
    .subscribe(id => this.character = id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  closeModal(){
    this.view.dismiss();
   }
 

}
