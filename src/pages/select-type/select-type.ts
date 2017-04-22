import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { LoginPage } from '../login/login';
import { ListPage } from '../list/list';
import { WelcomePage } from '../welcome/welcome';
import { WelcomeHandyPage } from '../welcome-handy/welcome-handy';






/*
  Generated class for the SelectType page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-select-type',
  templateUrl: 'select-type.html'
})
export class SelectTypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectTypePage');
  }

  // goabout(){
  // 	this.navCtrl.push(AboutPage);
  // }

  gouser(){
  	this.navCtrl.push(WelcomePage);
  }

  gohandy(){
    this.navCtrl.push(WelcomeHandyPage);
  }

  // golist(){
  // 	this.navCtrl.push(ListPage);
  // }

}
