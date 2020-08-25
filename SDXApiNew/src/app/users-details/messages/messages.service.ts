import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  fetchMessages(id: number): Observable<any> {
    const urlPosts = 'https://jsonplaceholder.typicode.com/posts?userId='+id; 
    return this.http.get(urlPosts);
  }

  fetchComments(idMessage: number): Observable<any> {
    const urlComments = 'https://jsonplaceholder.typicode.com/comments?postId='+idMessage;
    return this.http.get(urlComments);
  }

}
