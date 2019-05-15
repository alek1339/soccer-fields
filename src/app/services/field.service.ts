import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

import { Router } from "@angular/router";

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

  private field = {
    name: "",
    address: "",
    tel: "",
    openFrom: "",
    openTo: ""
  };

  getAll(): Observable<any> {
    return this.http.get(`${this.uri}/`);
  }

  getById(id: string) {
    return this.http.get(`${this.uri}/${id}`);
  }

  add(field) {
    this.field = field;

    this.http.post(`${this.uri}/add`, this.field).subscribe(res => {
      alertify.success("Your added field successfully!");
      this.router.navigate(["/football-fields/all"]);
    });
  }

  edit(id, field) {
    this.field = field;
    this.http.put(`${this.uri}/${id}`, this.field).subscribe(res => {
      alertify.success("Your edited field successfully!");
      // I have to find why this doesn't work
      this.router.navigate(["/football-fields/all"]);
    });
    // this.router.navigate(["/football-fields/all"]);
  }

  deleteField() {
    this.http.post(`${this.uri}/delete/`, this.field).subscribe(res => {
      this.router.navigate(["/football-fields/all"]);
    });

    alertify.confirm(
      "Confirm Title",
      "Do you want to delete ?",
      () => {
        const id: string = this.route.snapshot.params.id;
        this.http
          .post(`${this.uri}/delete/${id}`, this.field)
          .subscribe(res => {
            alertify.success("You deleted the field!");
            this.router.navigate(["/football-fields/all"]);
          });
      },
      function() {
        alertify.error("Cancel");
      }
    );

    this.router.navigate(["/football-fields/all"]);
  }
}
