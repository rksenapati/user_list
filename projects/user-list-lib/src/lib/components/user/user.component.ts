import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'lib-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  count: number;
  orderby: string = 'asc';
  searchValue: string;
  userForm: FormGroup;
  showModal: boolean;
  sortColumn: string;
  @Input() userType: string;

  users: { name: string; phone: number; }[];

  constructor(private _formBuilder: FormBuilder) {
    this.userForm = this._formBuilder.group({
      fields: this._formBuilder.array([])
    });
    this.users = []
    this.searchValue= "";
  }

  ngOnInit(): void {
  }

  sortCol(col: string) {
    this.sortColumn = col;
    if (this.orderby == 'asc') {
      this.orderby = 'desc'
    }
    else {
      this.orderby = 'asc'
    }
  }

  openModal() {
    this.addMore();
    this.showModal = true;
  }

  hide() {
    this.removeItem();
    this.showModal = false;
  }

  get fields() {
    return this.userForm.get('fields') as FormArray;
  }

  addMore() {
    this.fields.push(this.addFormGroup());
  }

  addFormGroup() {
    return this._formBuilder.group({ name: ['', Validators.required], phone: ['', Validators.required] })
  }

  removeItem() {
    this.count = 0;
    for (let data of this.fields.controls) {
      this.fields.removeAt(this.count);
      this.count = +1;
    }
  }
  deleteRow(index) {
    console.log(index);
    this.fields.removeAt(index);
  }
  onSubmit() {
    this.fields.controls.forEach((data, i) => {
      this.users.push(this.userForm.get(['fields', i]).value)
    })
    this.hide();
  }

}
