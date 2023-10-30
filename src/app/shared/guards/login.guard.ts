import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from '../services/student.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private studentService: StudentService, private router: Router) {}

  canActivate() {
    if (this.studentService.isLoggedIn()) {
      return true;
    } else {
      alert('Please login');
      this.router.navigate(['']);
      return false;
    }
  }
}
