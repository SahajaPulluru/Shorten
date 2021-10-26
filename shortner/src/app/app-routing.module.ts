import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LongtoshortComponent } from './longtoshort/longtoshort.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path:"",
    component: HomeComponent,
  },
  {
    path:"login",
    component: LoginComponent,
  
  },
  {
    path:"longtoshort",
    component: LongtoshortComponent,
  },
  
  {
    path:"register",
    component: RegisterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }