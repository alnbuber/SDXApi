import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from './todos.service';
import { TodosDTO } from './todoDTO';
import {MatTableModule, MatTable} from '@angular/material/table';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  idUser: number;
  displayedColumns: string[] = ['title', 'completed'];
  todosList: TodosDTO[] = [];

  @ViewChild('myTodosTable') table: MatTable<any>;
  constructor(private serviceTodos: TodosService,
              private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    const idUser = this.activatedRoute.parent.url.subscribe((data)=>{
      this.idUser = parseInt(data[1].path);

      this.serviceTodos.fetchTodos(this.idUser).subscribe((data)=>{
        this.todosList = data;
      });
    });
  }

}
