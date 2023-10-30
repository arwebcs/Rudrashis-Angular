import { Component } from '@angular/core';
import { StudentService } from '../shared/services/student.service';

@Component({
  selector: 'app-simple-service',
  templateUrl: './simple-service.component.html',
  styleUrls: ['./simple-service.component.css'],
})
export class SimpleServiceComponent {
  marks: number = 80;
  division: string = '';

  constructor(private studentServ: StudentService) {
    this.division = this.studentServ.getDivision(this.marks);
  }
}
