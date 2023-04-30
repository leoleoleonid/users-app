import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersMapComponent } from './users-map/users-map.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./_services/user.service";
import {CreateUserComponent} from "./create-user/create-user.component";
import {CreateUpdateUserComponent} from "./create-update-user/create-update-user.component";
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UsersListComponent,
    CreateUpdateUserComponent,
    UsersMapComponent,
    CreateUserComponent,
    UpdateUserComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
