import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { observable, Observable } from 'rxjs';
import { UserDto } from './userDTO';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  fetchUsers(): Observable<any> {
    const urlRoute = 'http://164.90.184.119:3000/users';
    return this.http.get(urlRoute);
  }
}
