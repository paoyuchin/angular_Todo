import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../modules/Todos';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
//  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
//  todosLimit = '?_limit=5'; 

  constructor(private http: HttpClient) { }

  // Get Todos
  getTodos(): Observable<Todo[]> {
    return of([
      {
        id: 1,
        title: 'hello',
        completed: true,
      },
      {
        id: 2,
        title: 'hi',
        completed: false,
      },
      {
        id: 3,
        title: 'hallo',
        completed: true,
      },
    ])
  }

  // // Delete Todo
  // deleteTodo(todo: Todo): Observable<Todo> {
  //   const url = `${this.todosUrl}/${todo.id}`;
  //   console.log('hiiiii')
  //   return this.http.delete<Todo>(url, httpOptions);
  // }

  // // Add Todo
  // addTodo(todo: Todo): Observable<Todo> {
  //   return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  // }

  // // Toggle Completed
  // toggleCompleted(todo: Todo): Observable<any> {
  //   todo.completed = !todo.completed
  //   const url = `${this.todosUrl}/${todo.id}`;
  //   return this.http.put(url, todo, httpOptions);
  // }
}
