import { IReservation } from "./resetvations";

export class Reservation implements IReservation {
  reservedField: string;
  startingTime: Date;
  endTime: Date;
  reservingUserId: string;
  constructor(reservation?) {
    reservation = reservation || {};
    this.reservedField = reservation.reservedField || null;
    this.startingTime = reservation.startingTime || null;
    this.endTime = reservation.endTime || null;
    this.reservingUserId = reservation.reservingUserId || null;
  }
}
