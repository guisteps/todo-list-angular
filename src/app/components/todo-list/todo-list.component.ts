import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todo: string = '';
  listTodo: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listTodo = JSON.parse(localStorage.getItem('todo-steps') || '[]');
  }

  add() {
    this.listTodo.push(this.todo);
    this.todo = '';
    localStorage.setItem('todo-steps', JSON.stringify(this.listTodo));
  }

  remove(i: number) {
    this.listTodo.splice(i, 1);
    localStorage.setItem('todo-steps', JSON.stringify(this.listTodo));
  }
}
