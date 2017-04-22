import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SendReviewPage } from '../send-review/send-review';


/*
  Generated class for the AfterHire page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-after-hire',
  templateUrl: 'after-hire.html'
})
export class AfterHirePage {
  rate: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AfterHirePage');
  }

  gotosendreview(){
    alert('after 12 hours the work has finished, we send a push notification to the user so he can send a review.');
    this.navCtrl.push(SendReviewPage);
  }

}
