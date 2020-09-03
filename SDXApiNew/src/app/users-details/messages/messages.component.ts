import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from './messages.service';
import { MessageDTO } from './messageDTO';
import { MatDialog } from '@angular/material/dialog';
import { CommentsComponent } from './comments/comments.component';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  idUser: number;
  postsUser: MessageDTO[] = [];

  constructor(private serviceMessage: MessagesService,
              private activatedRoute: ActivatedRoute,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    const idUser = this.activatedRoute.parent.url.subscribe((data)=>{
      this.idUser = parseInt(data[1].path);

      this.serviceMessage.fetchMessages(this.idUser).subscribe((data)=>{
        this.postsUser = data;
      });
    });
  }

  showComments(post: MessageDTO){
    this.serviceMessage.fetchComments(post.id).subscribe((comments)=>{
      this.dialog.open( CommentsComponent, {
        data: comments
      });
    });
  }

}
