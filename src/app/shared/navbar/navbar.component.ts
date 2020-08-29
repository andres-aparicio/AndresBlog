import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import Swal from 'sweetalert2';
import { MensajesService } from '../../services/mensajes.service';
import { UsuarioService } from '../../services/usuario.service';
declare let $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  ojo = true;
  login1: boolean;
  input1: boolean;
  clave = '5f3f4d920a600705782b98ee'; //Quitar en produccion

  constructor(public modalservice: ModalService,
    public mensajes: MensajesService,
    public usuarioservice: UsuarioService) {
    this.modalservice.ojo2 = true;
  }
  
  ngOnInit(): void {
    this.mensajes.sumaMensajes();
  }

  cerrarNavbar() {
    this.login1 = false;
    this.input1 = false;
    $('.navbar-collapse').collapse('hide');
    window.scrollTo(0, 0);
  }

  alerta() {
    $('#alerta').modal();
    this.cerrarNavbar();
  }

  onclick1() {
    this.ojo = false;
    this.login1 = false;
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  onclick2() {
    this.ojo = true;
    this.login1 = true;
    this.modalservice.ojo2 = false;
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  entrar() {
    this.login1 = false;
    this.input1 = true;
    $(document).ready(() => {
      $('#focusClave').trigger('focus');
    });
    $('[data-toggle="tooltip"]').tooltip('hide');
  }

  inputLogin() {
    if (this.clave !== this.usuarioservice.pass) {
      this.input1 = false;
      this.login1 = false;
      this.cerrarNavbar();
      this.clave = '';
    }
    else {
      this.input1 = false;
      this.login1 = false;
      this.cerrarNavbar();
      this.clave = '';
      $('#loginModal').modal();
      $(document).ready(() => {
        $('#loginModal').on('shown.bs.modal', () => {
          $('#focusLogin').trigger('focus');
        });
      });
    }
  }
  
  logOut() {
    this.usuarioservice.logOut();
    this.cerrarNavbar();
    this.modalservice.logOut();
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000
    });
    Toast.fire({
      title: 'Andres Offline',
      background: 'rgb(233,233,0)',
      icon: 'success'
    });
  }
}
