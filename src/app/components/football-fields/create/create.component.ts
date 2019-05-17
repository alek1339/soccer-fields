import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

import { FieldService } from "../../../services/field.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  constructor(public fieldService: FieldService) {}

  createForm: FormGroup;

  ngOnInit() {
    this.createForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(40)
      ]),
      phone: new FormControl(null, Validators.required),
      pictures: new FormArray([]),
      openFrom: new FormControl("07:00"),
      openTo: new FormControl("23:00")
    });
  }

  onSubmit() {
    this.fieldService.add(this.createForm.value);
  }

  onAddPicture() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.createForm.get("pictures")).push(control);
  }
}
