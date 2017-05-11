import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EliteApi } from '../../shared/shared';
import _ from 'lodash';
@IonicPage()
@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html',
})
export class StandingsPage {
  standings: any[];
  team: any;
  allStandings: any[];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private eliteApi: EliteApi) {
  }
 
  ionViewDidLoad() {
    this.team = this.navParams.data;
    let tourneyData = this.eliteApi.getCurrentTourney();
    this.standings = tourneyData.standings;

    this.allStandings = 
      _.chain(this.standings)
       .groupBy('division')
       .toPairs()
       .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
      .value();

    console.log('standings', this.standings);
    console.log('division Standings', this.allStandings);  
  }

}
