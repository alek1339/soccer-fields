import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

import { FieldService } from "../../../services/field.service";
import { Field } from "src/app/models/fields/field.model";
import { IField } from "src/app/models/fields/football-field";

import { ValidateBookForm } from "../../../validators/book-form.validator";

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

  availableHours = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

  ngOnInit() {
    let id = "";
    this.route.params.subscribe(params => {
      id = params["id"];
    });

    this.fieldService.getById(id).subscribe(data => {
      this.field = new Field(data);
      this.bookForm = new FormGroup({
        bookFrom: new FormControl(null, Validators.required),
        bookTo: new FormControl(null, Validators.required)
      });
    });
  }

  onSubmit() {

    // if form valid set start and end integers iton hour
    //format and send to calendar component
    if (ValidateBookForm(this.bookForm.value)) {
      this.displayCalendar = this.bookForm.value || false;

      this.startHour = this.bookForm.value.bookFrom;
      this.endHour = this.bookForm.value.bookTo;
    }

    console.log(ValidateBookForm(this.bookForm.value));
    console.log(this.bookForm.value);
  }
}
