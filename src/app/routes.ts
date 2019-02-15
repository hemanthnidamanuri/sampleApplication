import { Routes } from '@angular/router';
import { SeperateviewComponent } from './seperateview/seperateview.component';
import { StudentComponent } from './student/student.component';


export const routes: Routes = [
    {path: 'student', component: StudentComponent},
    {path: 'seperateview/:id/:name/:phone/:colg',  component: SeperateviewComponent , pathMatch: 'full'}
  ];


