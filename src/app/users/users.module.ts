import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ListComponent } from './list/list.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [UsersComponent, AddEditComponent, ListComponent],
    imports: [
        CommonModule,
        UsersRoutingModule,
        ReactiveFormsModule
    ]
})
export class UsersModule { }
