import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { MessagesComponent } from './users-details/messages/messages.component';
import { AlbumsComponent } from './users-details/albums/albums.component';
import { TodosComponent } from './users-details/todos/todos.component';


const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: UsersComponent},
  {
    path: 'users/:id', 
    component: UsersDetailsComponent,
    children: [
      {path: 'messages', component: MessagesComponent},
      {path: 'albums', component: AlbumsComponent},
      {path: 'todos', component: TodosComponent}
    ]
  },
  {path: '**', component: PageNotFoundComponent}  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = 
[
  UsersComponent,
  UsersDetailsComponent,
  PageNotFoundComponent,
  MessagesComponent,
  AlbumsComponent,
  TodosComponent
];