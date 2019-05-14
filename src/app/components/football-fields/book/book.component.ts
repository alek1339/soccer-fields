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
    console.log(ValidateBookForm(this.bookForm.value));
    console.log(this.bookForm.value);
  }
}
