import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { EliteApi, UserSettings } from '../shared/shared';

import { MyApp } from './app.component';
import { MyTeamsPage, TeamDetailPage, GamePage, TournamentsPage, TeamsPage, TeamHomePage, StandingsPage } from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TeamDetailPage,
    GamePage,
    TournamentsPage,
    TeamsPage,
    TeamHomePage,
    StandingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TeamDetailPage,
    GamePage,
    TournamentsPage,
    TeamsPage,
    TeamHomePage,
    StandingsPage
  ],
  providers: [
    EliteApi,
    UserSettings,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
