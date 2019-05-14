import { IReservation } from "./resetvations";

export class Reservation implements IReservation {
  reservedField: string;
  startingTime: string;
  endTime: string;
  reservingUserId: string;
  constructor(reservation?) {
    reservation = reservation || {};
    this.reservedField = reservation.reservedField || null;
    this.startingTime = reservation.startingTime || null;
    this.endTime = reservation.endTime || null;
    this.reservingUserId = reservation.reservingUserId || null;
  }
}
