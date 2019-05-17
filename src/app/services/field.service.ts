import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

import { Router } from "@angular/router";

import { IField } from "../models/fields/football-field";
import { Field } from "../models/fields/field.model";

import { AppConf } from "../core/conf";

import alertify from "alertifyjs";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class FieldService {
  constructor(
    public router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  private uri = AppConf.server + AppConf.api.fields;

  private field: IField = new Field();

  getAll(): Observable<any> {
    return this.http.get(`${this.uri}/`);
  }

  getById(id: string) {
    return this.http.get(`${this.uri}/${id}`);
  }

  add(field) {
    this.field = field;

    this.http.post(`${this.uri}/add`, this.field).subscribe(res => {
      alertify.success("You added field successfully!");
      this.router.navigate(["/football-fields/all"]);
    });
  }

  edit(id, field) {
    this.field = field;
    this.http.put(`${this.uri}/${id}`, this.field).subscribe(res => {
      console.log(res);
      alertify.success("You edited field successfully!");
      // I have to find why this doesn't work
      this.router.navigate([`/football-fields/book/` + res]);
    });
    // this.router.navigate(["/football-fields/all"]);
  }

  deleteField(fieldId) {
    let id = fieldId;
    alertify.confirm(
      "Confirm Title",
      "Do you want to delete ?",
      () => {
        this.http.delete(`${this.uri}/${id}`).subscribe(res => {
          alertify.success("You deleted the field!");
          this.router.navigate(["/football-fields/all"]);
        });
      },
      function() {
        alertify.error("Cancel");
      }
    );
  }
}
