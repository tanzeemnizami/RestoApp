import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';



const routes: Routes = [
  {path:'', redirectTo:'add', pathMatch:'full'},
  {path:'add' ,component: AddComponent},
  {component: ListComponent, path:'list'},
  {component: LoginComponent, path:'login'},
  {component: UpdateComponent, path:'update/:id'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
