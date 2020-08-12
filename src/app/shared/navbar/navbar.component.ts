import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import Swal from 'sweetalert2';
declare let $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  ojo= true;
  login1: boolean;
  input1: boolean;
  clave = '';

  constructor(public modalservice: ModalService) { 
    this.modalservice.ojo2 = true;
  }

  ngOnInit(): void {
  }

  cerrarNavbar(){
    this.login1= false;
    this.input1= false;
    $('.navbar-collapse').collapse('hide');
  }
  
  alerta() {
    $('#alerta').modal();
    this.cerrarNavbar();
  }
  
  onclick1(){
    this.ojo = false;
    this.login1 = false;
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  onclick2(){
    this.ojo=true;
    this.login1=true;
    this.modalservice.ojo2 = false;
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  entrar(){
    this.login1=false;
    this.input1=true;
    $(document).ready(() => {
        $('#focusClave').trigger('focus');
    });
    $('[data-toggle="tooltip"]').tooltip('hide');
  }

  inputLogin(){
    if( this.clave !== '123'){
      this.input1= false;
      this.login1= false;
      this.cerrarNavbar();
      this.clave='';
    }
    else{
      this.input1= false;
      this.login1= false;
      this.cerrarNavbar();
      this.clave='';
      $('#loginModal').modal();
      $(document).ready(() => {
        $('#loginModal').on('shown.bs.modal', () => {
          $('#focusLogin').trigger('focus');
        });
      });
    }
  }
  logOut(){
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
