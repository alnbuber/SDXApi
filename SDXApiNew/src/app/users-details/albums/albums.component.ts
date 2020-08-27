import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from './albums.service';
import { AlbumDTO } from './albumDTO';
import { PhotoDTO } from './photoDTO';
import { MatDialog } from '@angular/material/dialog';
import { PhotosComponent } from './photos/photos.component';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  idUser: number;
  userAlbums: AlbumDTO[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private serviceAlbums: AlbumsService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    const idUser = this.activatedRoute.parent.url.subscribe((data)=>{
      this.idUser = parseInt(data[1].path);

      this.serviceAlbums.fetchAlbums(this.idUser).subscribe((albums)=>{
        this.userAlbums = albums;
      });
    });
  }

  displayPhotos(idAlbum: number) {
    this.serviceAlbums.fetchPhotos(idAlbum).subscribe((photos)=> {
      const photosFetched: PhotoDTO[] = photos;

      this.dialog.open( PhotosComponent , {data: photosFetched});
    })
  }

}
