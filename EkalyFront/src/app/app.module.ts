import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import{MatGridListModule} from '@angular/material/grid-list'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListeRestoClientComponent } from './liste-resto-client/liste-resto-client.component';
import { AjoutRestoComponent } from './ajout-resto/ajout-resto.component';
import { DetailRestoComponent } from './detail-resto/detail-resto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ListeLivreurComponent } from './livreur/liste-livreur/liste-livreur.component';
import { AddLivreurComponent } from './livreur/add-livreur/add-livreur.component';
import { ListePlatComponent } from './plat/liste-plat/liste-plat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginClientComponent,
    ListeRestoClientComponent,
    AjoutRestoComponent,
    DetailRestoComponent,
    ListeLivreurComponent,
    AddLivreurComponent,
    ListePlatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    BrowserAnimationsModule ,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule ,
    MatTableModule,
    MatGridListModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
