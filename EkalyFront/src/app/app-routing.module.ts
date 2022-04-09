import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutRestoComponent } from './ajout-resto/ajout-resto.component';
import { ListeRestoClientComponent } from './liste-resto-client/liste-resto-client.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { ListeLivreurComponent } from './livreur/liste-livreur/liste-livreur.component';
import { AddLivreurComponent } from './livreur/add-livreur/add-livreur.component';

const routes: Routes = [
  {path : 'login' , component : LoginClientComponent},
  {path : 'Liste-Resto' , component : ListeRestoClientComponent} , 
  {path : 'add-Resto' , component : AjoutRestoComponent} ,
  {path : 'liste-livreur' , component : ListeLivreurComponent},
  {path : 'ajout-livreur' , component : AddLivreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
