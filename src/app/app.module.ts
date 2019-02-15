import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FruitsComponent } from './fruits/fruits.component';
import { StudentComponent } from './student/student.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import {SeperateviewComponent} from './seperateview/seperateview.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import {routes} from './routes';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FruitsComponent,
    StudentComponent,
    StudentdetailComponent,
    SeperateviewComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
