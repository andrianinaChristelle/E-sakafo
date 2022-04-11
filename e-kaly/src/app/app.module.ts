import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListeRestoComponent } from './page/liste-resto/liste-resto.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './page/login/login.component';
import { InscriptionComponent } from './page/inscription/inscription.component';
import { PlatComponent } from './page/plat/plat.component';
import { PanierComponent } from './page/panier/panier.component';
import { FormsModule } from '@angular/forms';
import { InterceptorService } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ListeRestoComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    InscriptionComponent,
    PlatComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    MatIconModule ,
    HttpClientModule ,
    FormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS , useClass:InterceptorService , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
