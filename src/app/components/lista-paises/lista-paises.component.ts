import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/service/paises.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.css']
})
export class ListaPaisesComponent implements OnInit {

  paises : any[] = [];

  constructor(private _paisesService : PaisesService,private router:Router) { }

  ngOnInit() {
    this._paisesService.getPaisesSudamericanos().subscribe(pais=>{this.paises = pais});
  }
 
  public DetallePais(nombrePais:string){ this.router.navigate(['/detalle-pais', nombrePais]) }
  
}
