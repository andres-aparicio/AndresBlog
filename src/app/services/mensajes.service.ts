import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  suma: number;

  constructor(
    private http: HttpClient
  ) { }

  getMensajes() {
    return this.http.get(`${URL}/contacto`);
  }

  borrarMensaje(id: string) {
    return this.http.delete(`${URL}/contacto/${id}`);
  }

  sumaMensajes() {
    this.getMensajes().subscribe((res: any) => {
      this.suma = res.contacto.length;
    })
  }
}
