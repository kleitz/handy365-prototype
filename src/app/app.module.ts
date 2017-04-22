import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SelectTypePage } from '../pages/select-type/select-type';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { WelcomePage } from '../pages/welcome/welcome';
import { MapPage } from '../pages/map/map';
import { DetailPage } from '../pages/detail/detail';
import { AfterHirePage } from '../pages/after-hire/after-hire';
import { WelcomeHandyPage } from '../pages/welcome-handy/welcome-handy';
import { SendReviewPage } from '../pages/send-review/send-review';
import { FindWorkPage } from '../pages/find-work/find-work';
import { WorkDetailPage } from '../pages/work-detail/work-detail';
import { WorkAcceptedPage } from '../pages/work-accepted/work-accepted';
import { SendHirePage } from '../pages/send-hire/send-hire';
import { ThanksPage } from '../pages/thanks/thanks';
import { LoginhandyPage } from '../pages/loginhandy/loginhandy';
import { SignuphandyPage } from '../pages/signuphandy/signuphandy';
import { WaitingworkPage } from '../pages/waitingwork/waitingwork';
import { ReceivingWorkPage } from '../pages/receiving-work/receiving-work';
import { WorkRequestPage } from '../pages/work-request/work-request';


// Import ionic2-rating module
import { Ionic2RatingModule } from 'ionic2-rating';
// import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AboutPage,
    TutorialPage,
    SelectTypePage,
    LoginPage,
    MapPage,
    SignupPage,
    WelcomePage,
    DetailPage,
    AfterHirePage,
    WelcomeHandyPage,
    SendReviewPage,
    FindWorkPage,
    WorkDetailPage,
    WorkAcceptedPage,
    SendHirePage,
    ThanksPage,
    LoginhandyPage,
    SignuphandyPage,
    WaitingworkPage,
    ReceivingWorkPage,
    WorkRequestPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule, // Put ionic2-rating module here
    // IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AboutPage,
    TutorialPage,
    SelectTypePage,
    LoginPage,
    MapPage,
    SignupPage,
    WelcomePage,
    DetailPage,
    AfterHirePage,
    WelcomeHandyPage,
    SendReviewPage,
    FindWorkPage,
    WorkDetailPage,
    WorkAcceptedPage,
    SendHirePage,
    ThanksPage,
    LoginhandyPage,
    SignuphandyPage,
    WaitingworkPage,
    ReceivingWorkPage,
    WorkRequestPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
