import { Component, OnInit, ɵConsole } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({

  selector: 'app-seperateview',
  templateUrl: './seperateview.component.html',
  styleUrls: ['./seperateview.component.css']
})
export class SeperateviewComponent implements OnInit {

  id: number;
  name: string;
  phone: string;
  colg: string;

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
        this.id = params['id'];
        this.name = params['name'];
        this.phone = params['phone'];
        this.colg = params['colg'];
    });
  }

  ngOnInit() {
  }

}
