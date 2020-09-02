import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario.service';
import { MensajesService } from '../../services/mensajes.service';
declare let $: any;

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: []
})
export class ModalsComponent implements OnInit {
  
  mensaje = {
    email: '',
    mensaje: ''
  };

  usuarioLogin={
    nombre: '',
    password: ''
  };



  constructor(public modalService: ModalService,
    public usuarioservice: UsuarioService,
    public mensajes: MensajesService) {
    this.modalService.privacidadSeleccionada = true;
  }

  ngOnInit(): void { }

  politicaPrivacidad() {
    this.modalService.politicaPrivacidad();
  }

  cambioPrivacidad() {
    this.modalService.cambioPrivacidad();
  }

  contacto() {
    this.modalService.contacto();
  }

  contactoFede(f: NgForm){
    if(f.invalid){
      $('#contacto').modal('hide');
      this.limpiarmensaje();
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000
        });    
      Toast.fire({
        title: 'Todos los campos son obligatorios',
        background: 'rgb(233,233,0)',
        icon: 'error'  
      });
    }else{
      $('#contacto').modal('hide');
      this.mensajes.crearMensaje(this.mensaje.email, this.mensaje.mensaje);
      this.limpiarmensaje();
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000
        });    
      Toast.fire({
        title: 'Mensaje enviado correctamente',
        background: 'rgb(233,233,0)',
        icon: 'success'  
      });
    }    
  }
  
  limpiarmensaje(){
    this.mensaje.mensaje = '';
    this.mensaje.email = '';
  }

  limpiarLogin(){
    this.usuarioLogin.nombre='';
    this.usuarioLogin.password= '';
  }

  salirLogin(){
    $('#loginModal').modal('hide');
  }

  async login(form: NgForm){
    if (form.invalid){
      this.salirLogin();
    }
    const usuarioValido = await this.usuarioservice.login(this.usuarioLogin.nombre, this.usuarioLogin.password);
    if(usuarioValido){
      this.salirLogin();
      this.usuarioservice.autentificado = true; //Guard
      setTimeout(() => {
        $('.navbar-collapse').collapse('hide');
      }, 1000);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000
        });    
      Toast.fire({
        title: 'Andres Online',
        background: 'rgb(233,233,0)',
        icon: 'success'  
      });
      this.limpiarLogin();
      this.modalService.online = true;
    }
    else{
      this.salirLogin();
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000
        });
      Toast.fire({
        title: 'Datos invalidos',
        background: 'rgb(233,233,0)',
        icon: 'error'
      });
      $('.navbar-collapse').collapse('hide');
      this.limpiarLogin();
    }
  }
}