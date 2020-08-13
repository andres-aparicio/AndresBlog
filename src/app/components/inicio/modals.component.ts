import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
declare let $: any;
@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: [
  ]
})
export class ModalsComponent implements OnInit {

  constructor(public modalservice:ModalService) { }

  ngOnInit(): void {
  }

  cerrarTec() {
    this.modalservice.cerrarTec();
  }

  pagina1() {
    this.modalservice.pagina1();
  }

  pagina2() {
    this.modalservice.pagina2();
  }

  pagina3() {
    this.modalservice.pagina3();
  }

  cerrarSobreMi(){
    this.modalservice.cerrarSobreMi();
  }
}
