import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessagesComponent } from './users-details/messages/messages.component';
import { AlbumsComponent } from './users-details/albums/albums.component';
import { TodosComponent } from './users-details/todos/todos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CommentsComponent } from './users-details/messages/comments/comments.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PhotosComponent } from './users-details/albums/photos/photos.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    PageNotFoundComponent,
    UsersDetailsComponent,
    MessagesComponent,
    AlbumsComponent,
    TodosComponent,
    CommentsComponent,
    PhotosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
