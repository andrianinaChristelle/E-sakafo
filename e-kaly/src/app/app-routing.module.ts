import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeRestoComponent } from './page/liste-resto/liste-resto.component';
import { LoginComponent } from './page/login/login.component';
import { InscriptionComponent } from './page/inscription/inscription.component';
import { PlatComponent } from './page/plat/plat.component';

const routes: Routes = [
  {path: '' , component : ListeRestoComponent},
  {path : 'login' , component: LoginComponent},
  {path : 'inscription' , component:InscriptionComponent},
  {path :'plat' , component:PlatComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
