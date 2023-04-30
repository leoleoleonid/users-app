import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import {User} from "../_services/user.interface";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateUserForm!: FormGroup;
  users!: User[];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.updateUserForm = this.formBuilder.group({
      userId: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      acl: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required],
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  onSubmit() {
    const userId = this.updateUserForm.get('userId')!.value;
    const user = {...this.updateUserForm.value};
    const lat = user.lat;
    const lng = user.lng;

    delete user.userId;
    delete user.lat;
    delete user.lng;


    for (const key in user) {
      if (!user[key]) {
        delete user[key]
      }
    }
    if (lat || lng) {
      user.homeLocation = {};
      if (lat) user.homeLocation.lat = Number(lat);
      if (lng) user.homeLocation.lng = Number(lng);
    }

    this.userService.updateUser(userId, user).subscribe(updatedUser => {
      console.log('User updated:', updatedUser);
    });
  }

}
