import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { TodoListComponent } from './todo-list.component';
import { IconsModule } from '../../icons/icons.module';


@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    FormsModule,
    IconsModule
  ]
})
export class TodoListModule { }
