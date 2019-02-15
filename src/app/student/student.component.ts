import { Component, OnInit } from '@angular/core';
import {Student} from '../Student';
import { STUDENTS } from '../studentList';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  stud: 'StudentDetails:';
  studs = STUDENTS;
  selectedStudent: Student;
  constructor() { }

  ngOnInit() {
  }
  onSelect(student: Student): void {
      this.selectedStudent = student;
  }

  deletert(selectedStud: any) {
    for (let i = 0; i < this.studs.length; i++) {
      let val = this.studs[i];
      if (val.id === selectedStud.id){
        const id = this.studs.indexOf(val);
        this.studs.splice(id,1);
      }
    }
  }
}
