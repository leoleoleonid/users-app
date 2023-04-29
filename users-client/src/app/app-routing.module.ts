import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateUserComponent} from "./create-user/create-user.component";
import {UsersListComponent} from "./users-list/users-list.component";
import {UsersMapComponent} from "./users-map/users-map.component";

const routes: Routes = [
  {path: '', component: UsersListComponent},
  {path: 'create-update-user', component: CreateUserComponent},
  {path: 'users-map', component: UsersMapComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
