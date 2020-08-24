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

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    PageNotFoundComponent,
    UsersDetailsComponent,
    MessagesComponent,
    AlbumsComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
