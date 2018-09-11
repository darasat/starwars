import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';
import {Character} from '../../models/Character';
import {SwapiCharacters} from '../../providers/swapi/swapi-characters';
import {ModalPage} from '../modal/modal';
/**
 * Generated class for the FilmsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-films-detail',
  templateUrl: 'films-detail.html',
})
export class FilmsDetailPage {

  film: any;
  private appearingCharacters: Character[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,  private swapiCharacters: SwapiCharacters,
  private modal:ModalController) {
    this.film = this.navParams.get('film');
    //alert (this.film);
    this.film.characters.map(charLink =>  {
      this.swapiCharacters.loadCharacterByUrl(charLink).subscribe(character => {
        this.appearingCharacters.push(character)
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmsDetailPage');
  }

  characterSelected(character: Character) {
 //   this.navCtrl.push(CharacterDetailsPage, {character});
 const myModal = this.modal.create (ModalPage, {character});
    myModal.present();
  }

 
  

}
