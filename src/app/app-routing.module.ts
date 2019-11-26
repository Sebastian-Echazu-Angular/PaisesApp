import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListaPaisesComponent } from './components/lista-paises/lista-paises.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'lista-paises',component:ListaPaisesComponent},
  //comodin
  {path:'**',pathMatch:'full',redirectTo:'hole'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
