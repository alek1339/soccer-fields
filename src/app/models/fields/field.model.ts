import { IField } from "./football-field";

export class Field implements IField {
  name: string;
  address: string;
  phone: string;
  openFrom: string;
  openTo: string;
  constructor(field?) {
    field = field || {};
    this.name = field.name || null;
    this.address = field.address || null;
    this.phone = field.phone || null;
    this.openFrom = field.openFrom || null;
    this.openTo = field.openTo || null;
  }
}
