import { IField } from "./football-field";

export class Field implements IField {
  name: string;
  address: string;
  tel: string;
  openFrom: string;
  openTo: string;
  constructor(field?) {
    field = field || {};
    this.name = field.name || null;
    this.address = field.address || null;
    this.tel = field.tel || null;
    this.openFrom = field.openFrom || null;
    this.openTo = field.openTo || null;
  }
}
