import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { ListPage } from '../list/list';

/*
  Generated class for the Thanks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-thanks',
  templateUrl: 'thanks.html'
})
export class ThanksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThanksPage');
  }

  finish(){
  	this.navCtrl.setRoot(ListPage);
  }


}
