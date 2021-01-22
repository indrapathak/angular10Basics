import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UsersModule} from  './users/users.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import {FormsModule}  from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';
import { ChildCompComponent } from './child-comp/child-comp.component'

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    HeaderComponent,
    FooterComponent,
   
    ChildCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
