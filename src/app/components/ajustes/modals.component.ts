import { Component, OnInit } from '@angular/core';
import { ImagenesYoService } from '../../services/imagenes-yo.service';
import { UsuarioService } from '../../services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { TecnologiaSobreMiService } from '../../services/tecnologia-sobre-mi.service';

declare let $: any;
const URL = environment.url;
@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: [
  ]
})
export class ModalsComponent implements OnInit {

  constructor(public imagenesYoService: ImagenesYoService,
    public usuarioservice: UsuarioService,
    private http: HttpClient,
    public tecSobre: TecnologiaSobreMiService) { }

  ngOnInit(): void {
  }

  seleccionarImg(archivo: File){
    this.imagenesYoService.imagenSubir = archivo;
    this.imagenesYoService.mostrarNombre = true;
    const reader = new FileReader();
    reader.onload = () => this.imagenesYoService.imagenSel = reader.result;
    reader.readAsDataURL(archivo);
    console.log(archivo.name);
  }

  cambiarMostrar(){
    this.imagenesYoService.mostrarNombre = false;
  }

  actualizarImagenYo(){
    if (this.imagenesYoService.imagenNombre !== this.imagenesYoService.imagenSubir.name){
      $('#imagen').modal('hide');
      this.cambiarMostrar();
    } else {
      const headers = {
        miToken: this.usuarioservice.token
      };
      const formdata = new FormData();
      formdata.append('img', this.imagenesYoService.imagenSubir, this.imagenesYoService.imagenSubir.name);
      return this.http.post(`${URL}/uploadYo/update`, formdata, {headers})
      .subscribe(res => {
        console.log(res);
        setTimeout(() => {
          $('#imagen').modal('hide');
        }, 100);
        this.cambiarMostrar();
        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 2000
          });
        Toast.fire({
          title: 'Imagen actualizada',
          background: 'rgb(233,233,0)',
        });
      });
    }
  }

  actualizarTec(f: NgForm){
    this.tecSobre.actualizarTecnologia(this.tecSobre.tecSel, this.tecSobre.tecSel._id);
    $('#imagen').modal('hide');
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 2000
    });
    Toast.fire({
      title: 'Tecnologia actualizada',
      background: 'rgb(233,233,0)',
    });
  }
}
