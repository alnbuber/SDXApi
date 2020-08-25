import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersDetailsService {

  constructor(private http: HttpClient) { }

  fetchUserInformation(id: number): Observable<any> {
    const urlUserSpecific = 'http://jsonplaceholder.typicode.com/users/'+id;
    return this.http.get(urlUserSpecific);
  }
}
