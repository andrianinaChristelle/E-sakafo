import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginClientComponent } from './login-client/login-client.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListeRestoClientComponent } from './liste-resto-client/liste-resto-client.component';
import { AjoutRestoComponent } from './ajout-resto/ajout-resto.component';
import { DetailRestoComponent } from './detail-resto/detail-resto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginClientComponent,
    ListeRestoClientComponent,
    AjoutRestoComponent,
    DetailRestoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
