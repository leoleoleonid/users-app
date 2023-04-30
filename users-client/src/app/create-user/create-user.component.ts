import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import {ACL, User} from "../_services/user.interface";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  createUserForm!: FormGroup;
  acl: ACL[] | string[] = ['', ACL.USER, ACL.ADMIN, ACL.MANAGER];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.createUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      acl: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.createUserForm.invalid) {
      return;
    }

    const user: User = {
      name: this.createUserForm.value.name,
      email: this.createUserForm.value.email,
      address: this.createUserForm.value.address,
      acl: this.createUserForm.value.acl,
      homeLocation: {
        lat: this.createUserForm.value.lat,
        lng: this.createUserForm.value.lng
      }
    };

    this.userService.createUser(user).subscribe(() => {
      console.log('User created successfully');
      this.createUserForm.reset();
    });
  }
}
