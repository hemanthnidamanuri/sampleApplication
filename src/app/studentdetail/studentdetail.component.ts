import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../Student';

@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css']
})
export class StudentdetailComponent implements OnInit {

  @Input() selectedstud: Student;
  @Output() selected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteRow(ss: Student) {
    this.selected.emit(ss);
  }
}
