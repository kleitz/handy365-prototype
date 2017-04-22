import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { LoginhandyPage } from '../loginhandy/loginhandy';
import { SignuphandyPage } from '../signuphandy/signuphandy';

/*
  Generated class for the WelcomeHandy page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-welcome-handy',
  templateUrl: 'welcome-handy.html'
})
export class WelcomeHandyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomeHandyPage');
    this.menu.swipeEnable(false, 'menu1');
  }

  loginhandy(){
  	this.navCtrl.push(LoginhandyPage);
  }

  signuphandy(){
  	this.navCtrl.push(SignuphandyPage);
  }

}
