import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { FieldService } from "../../../services/field.service";
import { Field } from "src/app/models/fields/field.model";
import { IField } from "src/app/models/fields/football-field";
import { IReservation } from "../../../models/reservations/resetvations";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  constructor(
    private fieldService: FieldService,
    private route: ActivatedRoute
  ) {}

  // startHour and endHour add to the date in calendar component
  startHour: number;
  endHour: number;

  displayCalendar: boolean = false;
  bookForm: FormGroup;
  field: IField = new Field();
  fieldId: string = "";
  reservations: IReservation[];

  availableHours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

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
    this.displayCalendar = this.bookForm.value || false;
    if (this.displayCalendar) {
      this.startHour = this.bookForm.value.bookFrom;
      this.endHour = this.bookForm.value.bookTo;
    }
  }

}
