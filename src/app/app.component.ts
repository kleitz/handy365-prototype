import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { MapPage } from '../pages/map/map';
import { WelcomePage } from '../pages/welcome/welcome';
import { WelcomeHandyPage } from '../pages/welcome-handy/welcome-handy';
import { SelectTypePage } from '../pages/select-type/select-type';









@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  // rootPage: any = ListPage;
  rootPage: any = SelectTypePage;
  pages: Array<{title: string, component: any}>;
  // pageshandy: Array<{title: string, component: any}>;
  usertype: number = 1;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Find a Handy', component: ListPage },
      { title: 'My works', component: AboutPage },
      { title: 'Settings', component: AboutPage },
      { title: 'Logout', component: WelcomePage },

      // { title: 'Handy section', component: MapPage }
    ];

    // this.pageshandy = [
    //   { title: 'My history', component: AboutPage },
    //   { title: 'Settings', component: AboutPage },
    //   { title: 'Logout', component: WelcomeHandyPage }
    // ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
