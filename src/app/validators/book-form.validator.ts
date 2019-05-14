import * as _ from "lodash";

export function ValidateBookForm({ bookFrom, bookTo }) {
  let reservations = [
    {
      reservedFrom: 10,
      reservedTo: 11
    },
    {
      reservedFrom: 12,
      reservedTo: 13
    }
  ];

  return checkFieldAvailability(bookFrom, bookTo, reservations);

  function checkFieldAvailability(bookFrom, bookTo, reservations) {
    for (let i = 0; i < reservations.length; i++) {
      const reservation = reservations[i];
      if (
        _.inRange(
          bookFrom,
          reservation.reservedFrom - 1,
          reservation.reservedTo + 1
        ) &&
        _.inRange(
          bookTo,
          reservation.reservedFrom + 1,
          reservation.reservedTo + 1
        )
      ) {
        // There is already a reservation in this hour
        return false;
      }
    }
    // Check for correct hours
    if (bookFrom < 7 || bookTo > 23 || bookFrom >= bookTo) {
      return false;
    }

    return true;
  }
}
