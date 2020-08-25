import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './users.service';
import { UserDto } from './userDTO';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserDto[] = [];

  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit(): void {
     
    this.usersService.fetchUsers().subscribe(
      (items) => {
          this.users = items;
        }
    );
  }

  displayUserInfo(id: number) {
    this.router.navigate(['/users',id]);
  }

}
