import * as _ from "lodash";
/*
* @bookFrom - starting date with local time for a field reservation
* @bookTo - ending date with local time for a field reservation
* @allReservations array of reservations from calendar
*/

export function ValidateBookForm( bookFrom: Date, bookTo: Date , allReservations: any[]) {
  const reservations = allReservations;
  const startHourCurrRes = bookFrom.getTime();
  const endHourCurrRes = bookTo.getTime();

  // Check for wotking hours
  if (bookFrom.getHours() < 7 || bookTo.getHours() > 23 || bookFrom.getHours() >= bookTo.getHours()) return false;

  // Check for existing reservations
  reservations.forEach( reservation => {
    const startHourExistRes = new Date(reservation.startingTime).getTime();
    const endHourExistRes = new Date(reservation.endTime).getTime();

    if (_.inRange(startHourCurrRes, startHourExistRes, endHourExistRes) && _.inRange(endHourCurrRes, startHourExistRes, endHourExistRes)) {
      return false; // Such a reservation exist
    }

  } ); //end forEach

  return true;
}
