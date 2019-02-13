import { Component, OnInit } from '@angular/core';

import {Fruit} from '../Fruit';
import { FRUITS } from '../fruitList';

 @Component({

   selector: 'app-fruits',
   templateUrl: './fruits.component.html',
   styleUrls: ['./fruits.component.css']
 })
 export class FruitsComponent implements OnInit {

   fruits = 'listoffruits';
   fruts = FRUITS;
   selectedFruit: Fruit;
   fruitdetails: Fruit = {

     id: 1,
     name: 'mango'
   };

   constructor() {
   }

   ngOnInit() {

   }
   onSelect(fruit: Fruit): void {
     this.selectedFruit = fruit;
   }
 }
