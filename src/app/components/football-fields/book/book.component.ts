import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

import { FieldService } from "../../../services/field.service";
import { ReservationService } from "../../../services/reservations.service";
import { Field } from "src/app/models/fields/field.model";
import { IField } from "src/app/models/fields/football-field";

import { IReservation } from "../../../models/reservations/resetvations";
import { Reservation } from "../../../models/reservations/reservations.model";

import { Auth } from "../../../core/auth";

import { ValidateBookForm } from "../../../validators/book-form.validator";

import alertify from "alertifyjs";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  constructor(
    private fieldService: FieldService,
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private auth: Auth
  ) {}

  bookForm: FormGroup;
  field: IField = new Field();
  fieldId: string = "";
  reservations: IReservation[];

  availableHours = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fieldId = params["id"];
    });

    this.fieldService.getById(this.fieldId).subscribe(data => {
      this.field = new Field(data);
      this.bookForm = new FormGroup({
        bookFrom: new FormControl(null, Validators.required),
        bookTo: new FormControl(null, Validators.required)
      });
    });
  }

  onSubmit() {
    this.reservationService.getById(this.fieldId).subscribe(data => {
      this.reservations = data;

      if (ValidateBookForm(this.bookForm.value, this.reservations)) {
        const reservation = {
          reservedField: this.fieldId,
          startingTime: this.bookForm.value.bookFrom,
          endTime: this.bookForm.value.bookTo,
          reservingUserId: this.auth.getUserId()
        };
        this.reservationService.add(reservation);
      } else {
        alertify.error("You can not make a reservation in this time!");
      }
    });
  }
}
