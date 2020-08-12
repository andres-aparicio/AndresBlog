import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
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
    nombre: 'andres',
    password: '123'
  };



  constructor(public modalService: ModalService) {
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
      console.log(f.value);
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
      console.log(f.value);
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

  login(form: NgForm){
    console.log(form.value);
    if(this.usuarioLogin.nombre === 'andres' && this.usuarioLogin.password === '123'){
      this.salirLogin();
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
      this.modalService.online=true;
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