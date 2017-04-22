import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import { LoginPage } from '../login/login';
// import { SignupPage } from '../signup/signup';

import { SelectTypePage } from '../select-type/select-type';
import { WelcomePage } from '../welcome/welcome';


/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {

  constructor(public navCtrl: NavController) {}

  // login() {
  //   this.navCtrl.push(LoginPage);
  // }

  // signup() {
  //   this.navCtrl.push(SignupPage);
  // }

  // goabout(){
  // 	this.navCtrl.push(SelectTypePage);
  // }

  gowelcome(){
    this.navCtrl.push(SelectTypePage);
  }



  slides = [
    {
      title: "Welcome to Handy365!",
      description: "Have you had a pipe burst all of a sudden? Or Have you had your air conditioning die in the middle of a hot day?  ",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is it?",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolore aliquam, vero sed, alias iste rerum labore ut minima et! Unde quas excepturi doloremque deserunt officia, deleniti ex sunt ratione.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "How does it work",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed dolor sint quos tempora neque dolores, nisi laboriosam quod est aliquam quisquam harum voluptatum eius, rem unde perspiciatis aut beatae vero!",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

}
