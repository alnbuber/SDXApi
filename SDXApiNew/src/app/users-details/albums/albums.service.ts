import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  fetchAlbums(userid: number): Observable<any> {
    const urlAlbums = 'https://jsonplaceholder.typicode.com/albums/?userId=' + userid;
    return this.http.get(urlAlbums);
  }

  fetchPhotos(idAlbum: number): Observable<any> {
    const urlPhotos = 'https://jsonplaceholder.typicode.com/photos?albumId=' + idAlbum;
    return this.http.get(urlPhotos);
  }

}
