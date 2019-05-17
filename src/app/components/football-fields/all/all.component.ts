import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { FieldService } from "../../../services/field.service";
import { Auth } from "../../../core/auth";
import { IField } from "src/app/models/fields/football-field";

@Component({
  selector: "app-all",
  templateUrl: "./all.component.html",
  styleUrls: ["./all.component.css"]
})
export class AllComponent implements OnInit {
  constructor(
    private fieldService: FieldService,
    private auth: Auth,
    private route: ActivatedRoute
  ) {}

  fields: IField[] = [];
  id: string = "";

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    });
    this.fieldService.getAll().subscribe(data => {
      this.fields = data;
    });
  }

  deleteField(id, idx) {
    this.fieldService.deleteField(id);
    console.log(idx);
    this.fields.splice(idx, 1);
    console.log(this.fields);
  }
}
