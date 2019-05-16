import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { FieldService } from "../../../services/field.service";
import { Auth } from "../../../core/auth";
import { Field } from "src/app/models/fields/field.model";
import { IField } from "src/app/models/fields/football-field";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  constructor(
    private fieldService: FieldService,
    private auth: Auth,
    private route: ActivatedRoute
  ) {}

  id: string = "";
  editForm: FormGroup;
  field: IField = new Field();

  ngOnInit() {
    this.id = "";
    this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    this.fieldService.getById(this.id).subscribe(data => {
      this.field = new Field(data);

      this.editForm = new FormGroup({
        name: new FormControl(this.field.name, Validators.required),
        address: new FormControl(this.field.address, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(40)
        ]),
        tel: new FormControl(this.field.tel, Validators.required),
        pictures: new FormArray([]),
        openFrom: new FormControl("07:00"),
        openTo: new FormControl("23:00")
      });
    });
  }

  onSubmit() {
    this.id = "";
    this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    this.fieldService.edit(this.id, this.editForm.value);
  }

  deleteForm() {
    console.log(this.id);
    this.fieldService.deleteField(this.id);
  }

  onAddPicture() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.editForm.get("pictures")).push(control);
  }
}
