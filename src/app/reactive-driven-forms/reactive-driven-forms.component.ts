import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-driven-forms',
  templateUrl: './reactive-driven-forms.component.html',
  styleUrls: ['./reactive-driven-forms.component.css'],
})
export class ReactiveDrivenFormsComponent {
  myForm!: FormGroup;
  image!: File;
  constructor() {
    this.myForm = new FormGroup({
      my_name: new FormControl('', [
        Validators.required,
        Validators.maxLength(3),
      ]),
      my_email: new FormControl(''),
    });
  }
  uploadFile(event: any) {
    const file = event.target.files ? event.target.files[0] : '';
    console.log(file);
    this.myForm.patchValue({
      image: file,
    });
  }
  onPopulate() {
    this.myForm = new FormGroup({
      my_name: new FormControl('Billey'),
      my_email: new FormControl('abc@gmail.com'),
    });
  }

  save() {
    console.log(this.myForm);
  }
}
