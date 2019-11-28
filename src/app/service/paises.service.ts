import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  public paises: any[] = [];
  paisesurl = 'https://restcountries.eu/rest/v2/regionalbloc/USAN';

  public pais: any[] = [];
  paisurl = 'https://restcountries.eu/rest/v2/name/'

  constructor(private http: HttpClient) { }

  public getPaisesSudamericanos() {
    console.log('service -getPaisesFromApi');
    return this.http.get(this.paisesurl).pipe(map(paisesServe => {
      this.paises = JSON.parse(JSON.stringify(paisesServe));
      console.log(this.paises);
      return this.paises;
    }))
  }
  public getPaisXNombre(nombrePais: string) {
    console.log('service - getPaisesXNombre');
    nombrePais = nombrePais.toLowerCase();
    var urlCompleta = this.paisurl.concat(nombrePais);
    console.log(urlCompleta);
    return this.http.get(urlCompleta);
  }
}
