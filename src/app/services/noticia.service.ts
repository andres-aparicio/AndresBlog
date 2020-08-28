import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  noticiaSel: any;
  noticiaCompleta = false;
  pagina = 1;

  constructor(private http: HttpClient) { }

  getUltimasNoticias() {
    return this.http.get(`${URL}/noticias?pagina=1`);
  }

  getNoticiasPaginadasMas() {
    this.pagina++;
    return this.http.get(`${URL}/noticias?pagina=${this.pagina}`);
  }

  getNoticiasPaginadasMenos() {
    if (this.pagina <= 1) {
      this.pagina = 1;
    } else {
      this.pagina--;
    }
    return this.http.get(`${URL}/noticias?pagina=${this.pagina}`);
  }
}
