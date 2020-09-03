import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  fetchMessages(id: number): Observable<any> {
    
    const urlPosts = 'http://164.90.184.119:3000/posts/?userId='+id;
    //const urlPosts = 'https://jsonplaceholder.typicode.com/posts?userId='+id; 
    return this.http.get(urlPosts);
  }

  fetchComments(idMessage: number): Observable<any> {
    const urlComments = 'http://164.90.184.119:3000/comments?postId='+idMessage;
    return this.http.get(urlComments);
  }

}
