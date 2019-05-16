import { Component, OnInit } from "@angular/core";
import { IPlayer } from "../../../models/players/player.model";

import { PlayersService } from "../../../services/players.service";
import { Auth } from "../../../core/auth";

@Component({
  selector: "app-all-players",
  templateUrl: "./all-players.component.html",
  styleUrls: ["./all-players.component.css"]
})
export class AllPlayersComponent implements OnInit {
  constructor(public auth: Auth, public playersService: PlayersService) {}

  players: IPlayer[] = [];
  ngOnInit() {
    this.playersService.getAll().subscribe(data => {
      console.log(data);
      this.players = data;
    });
  }
}
