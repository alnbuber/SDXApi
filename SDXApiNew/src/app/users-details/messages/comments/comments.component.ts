import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommentDTO } from '../commentDTO';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: CommentDTO[] = [];

  constructor(public matDialogRef: MatDialogRef<CommentsComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: CommentDTO[]) { }

  ngOnInit(): void {
    this.comments = this.data;
  }

  onNoClick(): void {
    this.matDialogRef.close();
  }

}
