import * as _ from "lodash";
/*
* @bookFrom - starting date with hour for a field reservation
* @bookTo - ending date with hour for a field reservation
* @allReservations array of reservations from calendar
*/

export function ValidateBookForm( bookFrom, bookTo , allReservations) {
  let reservations = allReservations;
  console.log(reservations);
  return checkFieldAvailability(bookFrom, bookTo, reservations);

  function checkFieldAvailability(bookFrom, bookTo, reservations) {   // need to remake for Date type
    // // Check for correct hours
    // if (bookFrom < 7 || bookTo > 23 || bookFrom >= bookTo) {
    //   return false;
    // }
    // for (let i = 0; i < reservations.length; i++) {
    //   const reservation = reservations[i];
    //   const start = Number(reservation.startingTime) - 1;
    //   const end = Number(reservation.endTime) + 1;

    //   if (_.inRange(bookFrom, start, end) && _.inRange(bookTo, start, end)) {
    //     // There is already a reservation in this hour
    //     console.log("Book from", bookFrom);
    //     console.log("===start ", start);
    //     console.log("===end ", end);

    //     return false;
    //   }
    // }
    return true;
  }
}
