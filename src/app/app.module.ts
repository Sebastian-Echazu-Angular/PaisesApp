import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListaPaisesComponent } from './components/lista-paises/lista-paises.component';
import { DetallePaisComponent } from './components/detalle-pais/detalle-pais.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PaisesService } from './service/paises.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaPaisesComponent,
    DetallePaisComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PaisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
