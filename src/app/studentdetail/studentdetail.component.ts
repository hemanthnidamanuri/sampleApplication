import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../Student';

@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css']
})
export class StudentdetailComponent implements OnInit {

  @Input() selectedstud: Student;
  constructor() { }

  ngOnInit() {
  }

}
