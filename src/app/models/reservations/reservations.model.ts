import { IReservation } from "./resetvations";
import { IField } from "../fields/football-field";

export class Field implements IField {
  name: string;
  address: string;
  tel: string;
  openFrom: string;
  openTo: string;
  constructor(field?) {
    field = field || {};
    this.name = field.name || null;
    this.address = field.address || null;
    this.tel = field.tel || null;
    this.openFrom = field.openFrom || null;
    this.openTo = field.openTo || null;
  }
}

export class Reservation implements IReservation {
  reservedField: string;
  startingTime: string;
  tendTime: string;
  reservingUserId: string;
  constructor(reservation?) {
    reservation = reservation || {};
    this.reservedField = reservation.reservedField || null;
    this.startingTime = reservation;
  }
}
