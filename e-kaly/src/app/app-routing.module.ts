import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeRestoComponent } from './page/liste-resto/liste-resto.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {path: '' , component : ListeRestoComponent},
  {path : 'login' , component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
