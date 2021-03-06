import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Router } from '@angular/router';
import { pluck } from 'rxjs/operators';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  pass = '';
  autentificado = false; //Guard

  constructor(
    private http: HttpClient,
    private router: Router
  ) { this.getId(); }

  login(nombre: string, password: string) {
    const data = { nombre, password };
    return new Promise(resolve => {
      this.http.post(`${URL}/usuario/entrar`, data)
        .subscribe((res: any) => {
          if (res.ok){
            this.guardarToken(res.token);
            resolve(true);
          }else{
            this.logOut();
            resolve(false);
          }
        });
    });
  }

  guardarToken(token: string){
    this.token = token;
  }

  logOut(){
    this.token = null;
    this.autentificado = false;
    this.router.navigateByUrl('/inicio');
  }

  getId(){
    return this.http.get(`${URL}/sobreMi`)
    .pipe(
      pluck('sobreMi', '0', '_id')
    ).subscribe((res: any) => {
      this.pass = res;
    });
  }
}
