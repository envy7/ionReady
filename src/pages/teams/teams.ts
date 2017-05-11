import { Component } from '@angular/core';
import { LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../pages';
import { EliteApi } from '../../shared/shared';
import _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
 private allTeams: any;
 private allTeamDivisions: any; 
 teams = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private eliteApi: EliteApi,
              private loadingController: LoadingController) {
  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }

  ionViewDidLoad() {
    let selectedTourney = this.navParams.data;
    
    let loader = this.loadingController.create({
      content: 'Getting data..'
    })

    loader.present().then(() => {
        this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data => {
        this.allTeams = data.teams;
        this.allTeamDivisions =
          _.chain(data.teams)
            .groupBy('division')
            .toPairs()
            .map(item => _.zipObject(['divisionName', 'divisionTeams'], item)) 
            .value();

        this.teams = this.allTeamDivisions;
        console.log('division teams', this.teams);
        loader.dismiss();    
      }) 
    });

    
  }

}
