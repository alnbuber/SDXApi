import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PhotoDTO } from '../photoDTO';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: PhotoDTO[] = [];

  constructor(public matDialogRef: MatDialogRef<PhotosComponent>,
              @Inject(MAT_DIALOG_DATA) public data: PhotoDTO[]) { }

  ngOnInit(): void {
    this.photos = this.data;
  }

  onNoClick(): void {
    this.matDialogRef.close();
  }
}
