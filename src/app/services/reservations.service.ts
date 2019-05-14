import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

import { IReservation } from "../models/reservations/resetvations";
import { Reservation } from "../models/reservations/reservations.model";

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

  private reservation: IReservation = new Reservation();

  private uri = AppConf.server + AppConf.api.reservations;

  add(reservation) {
    this.reservation = reservation;

    this.http.post(`${this.uri}/add`, this.reservation).subscribe(res => {
      alertify.success("You added reservation successfully!");
      this.router.navigate(["/reservations/all"]);
    });
  }
}
