import { Component } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  newTodo = '';
  newDueDate: string = '';
  todos: Todo[] = [];
  editTodoId: number | null = null;
  editTitle = '';
  editDueDate: string = '';


  constructor(private todo:TodoService) {
  }

  ngOnInit() {
    this.todos = this.todo.getTodos()
  }

  addTodo() {
    if (!this.newTodo) return;
    this.todos.push({
      id: Date.now(),
      title: this.newTodo,
      dueDate: this.newDueDate,
      completed: false
    });

    this.newTodo = '';
    this.newDueDate = '';
  }

  startEdit(todo: any) {
    this.editTodoId = todo.id;
    this.editTitle = todo.title;
    this.editDueDate = todo.dueDate;
  }

  toggleTodo(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) todo.completed = !todo.completed;
  }

  deleteTodo(id: number) {
    this.todo.deleteTodo(id);
    this.todos = this.todo.getTodos();
  }

  saveEdit(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.title = this.editTitle;
      todo.dueDate = this.editDueDate;
    }
    this.cancelEdit();
  }

  cancelEdit() {
    this.editTodoId = null;
    this.editTitle = '';
    this.editDueDate = '';
  }
}

