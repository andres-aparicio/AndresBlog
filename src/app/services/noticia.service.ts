import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  noticiaSel: any;
  noticiaCompleta = false;
  pagina = 1;

  constructor(private http: HttpClient) { }

  getUltimasNoticias(){
    return this.http.get(`${URL}/noticias?pagina=${this.pagina}`);
  }
}
