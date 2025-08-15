import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  constructor() { }
  getTodos(): Todo[] {
    return this.todos;
  }
  // Add new todo
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  toggleTodo(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) todo.completed = !todo.completed;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
