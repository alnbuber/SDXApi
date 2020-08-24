import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  id: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
  }

  userOverview() {
    this.router.navigate(['./'], {relativeTo: this.activatedRoute});
  }

  userMessages() {
    this.router.navigate(['messages'], {relativeTo: this.activatedRoute});
  }

  userAlbums() {
    this.router.navigate(['albums'], {relativeTo: this.activatedRoute});
  }

  userTodos() {
    this.router.navigate(['todos'], {relativeTo: this.activatedRoute});
  }

}
