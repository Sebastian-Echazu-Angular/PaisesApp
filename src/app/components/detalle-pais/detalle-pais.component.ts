import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/service/paises.service';
import { ActivatedRoute } from '@angular/router';
import { cleanSession } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  pais: any;
  nombrePais: string;

  constructor(private _paisesService: PaisesService, private activatedRoute: ActivatedRoute) {
   }

  ngOnInit() {
   this.activatedRoute.params.subscribe(params =>{
     this.nombrePais = params['nombrePais'];
     this.pais = this._paisesService.getPaisXNombre(params['nombrePais']);
   })
  }
}
