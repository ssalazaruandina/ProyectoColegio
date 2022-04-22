import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './Componentes/side-bar/side-bar.component';
import { LoginComponent } from './Componentes/login/login.component';
import { PerfilComponent } from './Componentes/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    LoginComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
