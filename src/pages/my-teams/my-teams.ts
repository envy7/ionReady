import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TournamentsPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeamsPage {

  constructor(private navCtrl: NavController, public navParams: NavParams) {
  }

  goToTournaments() {
    this.navCtrl.push(TournamentsPage);
  }

}
