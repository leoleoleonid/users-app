import {Component, OnInit} from '@angular/core';
import {User} from "../_services/user.interface";
import {UserService} from "../_services/user.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }
}
