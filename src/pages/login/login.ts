import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

// import { TranslateService } from 'ng2-translate/ng2-translate';

// import { MainPage } from '../../pages/pages';
import { ListPage } from '../list/list';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: {email: string, password: string} = {
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController){

  }

  // Attempt to login in through our User service
  doLogin() {
    // this.navCtrl.push(ListPage);
    // setRoot(page, params, opts)
    this.navCtrl.setRoot(ListPage);

  }
}
