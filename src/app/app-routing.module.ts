import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserRepositoryComponent } from './components/user-repository/user-repository.component';

// Routes
const routes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'specific-user-repository/:id', component: UserRepositoryComponent},
  { path: '', redirectTo: 'users', pathMatch: 'full' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
