import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

import { Router } from "@angular/router";

import { AppConf } from "../core/conf";

import alertify from "alertifyjs";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class ReservationService {
  constructor(
    public router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  private uri = AppConf.server + AppConf.api.reservations;

  private reservation = {
    name: "",
    address: "",
    tel: "",
    openFrom: "",
    openTo: ""
  };
}
