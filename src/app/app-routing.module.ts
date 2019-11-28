import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListaPaisesComponent } from './components/lista-paises/lista-paises.component';
import { DetallePaisComponent } from './components/detalle-pais/detalle-pais.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'lista-paises',component:ListaPaisesComponent},
  {path:'detalle-pais/:nombrePais',component:DetallePaisComponent},
  //comodin
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
