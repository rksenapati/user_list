import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListLibModule } from 'user-list-lib';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    MatTabsModule,
    BrowserAnimationsModule ,
    AppRoutingModule,
    UserListLibModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
