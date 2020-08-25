import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'
import { UsersDetailsService } from './users-details.service';
import { UserDto } from '../users/userDTO';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  selectedUser: UserDto = 
  {
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: 0,
        lng: 0
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }   };

  constructor(private userService: UsersDetailsService ,
              private router: Router, 
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const idUser = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
    this.fetchUser(idUser);
  }

  fetchUser(id: number) {
    this.userService.fetchUserInformation(id).subscribe((userFetch)=>{
      this.selectedUser = userFetch;
    })
  }

  usersList() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
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
