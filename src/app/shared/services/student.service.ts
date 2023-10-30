import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  getDivision(marks: number) {
    let message = '';

    if (marks >= 60) {
      message = 'First';
    } else if (marks < 60 && marks >= 45) {
      message = 'Second';
    } else {
      message = 'Failed';
    }

    return message;
  }

  isLoggedIn() {
    return false;
  }
}
