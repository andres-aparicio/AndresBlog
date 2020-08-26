import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../../services/mensajes.service';
import { Contacto } from '../../../../../Server/modelos/contacto';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styles: [
  ]
})
export class MensajesComponent implements OnInit {
  mensajesEmail: string[] = [];
  mensajeSel: any;

  constructor(
    public mensajes: MensajesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mensajes.getMensajes()
    .subscribe((res: any) => {
      this.mensajesEmail.push(...res.contacto);
      if(this.mensajesEmail.length === 0){
        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: true,
          customClass:{ confirmButton:'back9'}
          });    
        Toast.fire({
          title: 'No hay ningun mensaje',
          background: 'rgb(233,233,0)',
        });
      }
    });
    this.mensajes.sumaMensajes();
    window.scrollTo(0, 0);
  }

  borrarMensaje(mensaje: string){
    this.mensajeSel = mensaje;
    this.mensajes.borrarMensaje(this.mensajeSel._id)
    .subscribe(() => {
      this.router.navigateByUrl('/inicio', {skipLocationChange: true})
      .then(() => this.router.navigate(['mensajes']));
    });
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000
      });    
    Toast.fire({
      title: 'Mensaje eliminado',
      background: 'rgb(233,233,0)',
    });
  }
}
