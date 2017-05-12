import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

@Injectable()
export class UserSettings {
    storage = new Storage(localStorage);

    constructor(private events: Events) {}

    favouriteTeam(team, tournamentId, tournamentName) {
        let item = {
            team: team,
            tournamentId: tournamentId,
            tournamentName: tournamentName
        };
        this.storage.set(team.id, JSON.stringify(item));
        this.events.publish('favourites:changed');
    }

    unfavouriteTeam(team) {
        this.storage.remove(team.id);
        this.events.publish('favourites:changed');
    }

    isFavouriteTeam(teamId) {
        return this.storage.get(teamId).then(value => value ? true : false);
    }

    getAllFavourites() {
        let items = [];
       
        return this.storage.forEach((v, k) => {
            items.push(JSON.parse(v));
        }).then(_ => {
            return items.length ? items : null;
        })
    }
}


