import { NgModule } from '@angular/core';
import { UserListLibComponent } from './user-list-lib.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { SortPipe } from './shared/pipes/sort.pipe';


@NgModule({
  declarations: [UserListLibComponent, UserComponent, FilterPipe, SortPipe],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    UserListLibComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserListLibModule { }
