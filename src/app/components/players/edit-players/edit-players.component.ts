import { Component, OnInit } from "@angular/core";

import { Auth } from "../../../core/auth";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

import { PlayersService } from "../../../services/players.service";
import { Player } from "../../../models/players/player";
import { IPlayer } from "../../../models/players/player.model";

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-players",
  templateUrl: "./edit-players.component.html",
  styleUrls: ["./edit-players.component.css"]
})
export class EditPlayersComponent implements OnInit {
  constructor(
    private playersService: PlayersService,
    private auth: Auth,
    private route: ActivatedRoute
  ) {}

  id: string = "";
  editForm: FormGroup;
  player: IPlayer = new Player();

  ngOnInit() {
    this.id = "";
    this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    this.playersService.getById(this.id).subscribe(data => {
      this.player = new Player(data);

      this.editForm = new FormGroup({
        name: new FormControl(this.player.name, Validators.required),
        games: new FormControl(this.player.games, Validators.required),
        goals: new FormControl(this.player.goals, Validators.required),
        assists: new FormControl(this.player.assists, Validators.required),
        age: new FormControl(this.player.age, Validators.required),
        picture: new FormControl(this.player.picture)
      });
    });
  }

  onSubmit() {
    this.id = "";
    this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    this.playersService.edit(this.id, this.editForm.value);
  }

  delete() {
    console.log(this.id);
    this.playersService.deletePlayer(this.id);
  }
}
