import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AfterHirePage } from '../after-hire/after-hire';


/*
  Generated class for the WorkRequest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-work-request',
  templateUrl: 'work-request.html'
})
export class WorkRequestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkRequestPage');
  	alert('At this point we have sent a push notification to the tradie. After he accepts, we notify the user about it and send him to this page. Click continue to mimic this feature.');
  }

  workconfirmation(){
    this.navCtrl.push(AfterHirePage);
  }

}
