import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  fetchTodos(userId: number): Observable<any> {
    const urlTodos = 'https://jsonplaceholder.typicode.com/todos?userId='+userId;
    return this.http.get(urlTodos);
  }
}
