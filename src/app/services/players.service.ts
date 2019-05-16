import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Router } from "@angular/router";

import { IPlayer } from "../models/players/player.model";
import { Player } from "../models/players/player";

import { AppConf } from "../core/conf";

import alertify from "alertifyjs";

@Injectable({ providedIn: "root" })
export class PlayersService {
  constructor(public router: Router, private http: HttpClient) {}

  uri = AppConf.server + AppConf.api.players;

  private player: IPlayer = new Player();

  getAll(): Observable<any> {
    return this.http.get(`${this.uri}/`);
  }

  getById(id: string) {
    return this.http.get(`${this.uri}/${id}`);
  }

  edit(id, player) {
    this.player = player;
    this.http.put(`${this.uri}/${id}`, this.player).subscribe(res => {
      alertify.success("You edited player successfully!");
      // I have to find why this doesn't work
      this.router.navigate(["/players/all"]);
    });
    // this.router.navigate(["/players/all"]);
  }

  add(player) {
    this.player = player;
    console.log(this.player);
    this.http.post(`${this.uri}/add`, this.player).subscribe(res => {
      alertify.success("Your added player successfully!");
      this.router.navigate(["/players/all"]);
    });
  }

  deletePlayer(playerId) {
    let id = playerId;
    alertify.confirm(
      "Confirm Title",
      "Do you want to delete ?",
      () => {
        this.http.delete(`${this.uri}/${id}`).subscribe(res => {
          alertify.success("You deleted the player!");
          this.router.navigate(["/players/all"]);
        });
      },
      function() {
        alertify.error("Cancel");
      }
    );
  }
}
