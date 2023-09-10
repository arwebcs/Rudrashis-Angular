import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-forms',
  templateUrl: './td-forms.component.html',
  styleUrls: ['./td-forms.component.css'],
})
export class TdFormsComponent {
  constructor() {}

  @ViewChild('frm') myForm: NgForm | undefined;

  nameErr: string = '';
  emailErr: string = '';

  onPopulate() {
    this.myForm?.form.patchValue({
      nm: 'Billey',
      em: 'abc@gmail.com',
    });
  }
  onReset() {
    this.myForm?.reset();
  }

  save() {
    // console.log(frm);
    console.log(this.myForm);

    if (this.myForm?.controls['nm'].errors) {
      const nmrequired = this.myForm?.controls['nm'].errors;
      if (nmrequired['required']) {
        this.nameErr = 'Please enter name';
      } else if (nmrequired['minlength']) {
        this.nameErr = 'At least 5 characters';
      }
    } else {
      this.nameErr = '';
    }
  }

  // save(frm: NgForm) {
  //   // console.log(frm);
  //   console.log(frm.form);

  //   if (frm.controls['nm'].errors) {
  //     const nmrequired = frm.controls['nm'].errors;
  //     if (nmrequired['required']) {
  //       this.nameErr = 'Please enter name';
  //     } else if (nmrequired['minlength']) {
  //       this.nameErr = 'At least 5 characters';
  //     }
  //   } else {
  //     this.nameErr = '';
  //   }
  // }
}
