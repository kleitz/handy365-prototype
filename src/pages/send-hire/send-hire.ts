import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AfterHirePage } from '../after-hire/after-hire';
import { WorkRequestPage } from '../work-request/work-request';



/*
  Generated class for the SendHire page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-send-hire',
  templateUrl: 'send-hire.html'
})
export class SendHirePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendHirePage');
  }

  // finishhire(){
  // 	// alert('At this point we send a push notification to the tradie. After he accepts, we notify the user about it.');
  //   this.navCtrl.push(AfterHirePage);
  // }

  sendrequest(){
    // alert('At this point we send a push notification to the tradie. After he accepts, we notify the user about it.');
    this.navCtrl.push(WorkRequestPage);
  }

}
