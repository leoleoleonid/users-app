import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersListComponent} from "./users-list/users-list.component";
import {UsersMapComponent} from "./users-map/users-map.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {UpdateUserComponent} from "./update-user/update-user.component";

const routes: Routes = [
  {path: '', component: UsersListComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: 'update-user', component: UpdateUserComponent},
  {path: 'users-map', component: UsersMapComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
