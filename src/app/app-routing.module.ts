import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SeperateviewComponent} from './seperateview/seperateview.component';


const routes: Routes = [
  {path: 'seperateview', component: SeperateviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
