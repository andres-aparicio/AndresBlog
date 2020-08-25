import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TecnologiaSobreMiService {

  

  constructor(
    private http : HttpClient
  ) { }

  getTecnologia(){
    return this.http.get(`${URL}/tecnologia`);
  }

  getSobreMi(){
    return this.http.get(`${URL}/sobreMi`);
  }
}
