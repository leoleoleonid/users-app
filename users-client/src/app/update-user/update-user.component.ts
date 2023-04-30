import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../_services/user.service';
import {ACL, User} from "../_services/user.interface";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateUserForm!: FormGroup;
  users!: User[];
  acl: ACL[] | string[] = ['', ACL.USER, ACL.ADMIN, ACL.MANAGER];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.updateUserForm = this.formBuilder.group({
      userId: ['', Validators.required],
      name: [''],
      email: ['', [Validators.email]],
      address: [''],
      acl: [''],
      lat: ['', [Validators.min(-90), Validators.max(90)]],
      lng: ['', [Validators.min(-180), Validators.max(180)]],
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  onSubmit() {
    console.log(this.updateUserForm.value)
    if(this.updateUserForm.invalid) {
      alert('FORM IS INVALID!!!')
      return;
    }
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
