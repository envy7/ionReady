import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class UserSettings {
    storage = new Storage(localStorage);

    constructor() {}

    favouriteTeam(team, tournamentId, tournamentName) {
        let item = {
            team: team,
            tournamentId: tournamentId,
            tournamentName: tournamentName
        };
        this.storage.set(team.id, JSON.stringify(item));
    }

    unfavouriteTeam(team) {
        this.storage.remove(team.id);
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


