import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TecnologiaSobreMiService {

  tecSel: any;
  mostrarTec = false;
  mostrarSobreMi = false;

  constructor(
    private http: HttpClient,
    public usuarioservice: UsuarioService
  ) { }

  getTecnologia() {
    return this.http.get(`${URL}/tecnologia`);
  }

  getSobreMi() {
    return this.http.get(`${URL}/sobreMi`);
  }

  actualizarTecnologia(tec: string, id: string){
    const headers = {
      miToken: this.usuarioservice.token
    };
    return this.http.post(`${URL}/tecnologia/update/${id}`, tec, {headers})
    .subscribe();
  }

  actualizarSobreMi(SobreMi: string, id: string){
    const headers = {
      miToken: this.usuarioservice.token
    };
    return this.http.post(`${URL}/sobreMi/update/${id}`, SobreMi, {headers})
    .subscribe();
  }


}
