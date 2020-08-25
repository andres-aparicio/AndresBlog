import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { TecnologiaSobreMiService } from '../../services/tecnologia-sobre-mi.service';
declare let $: any;
@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: [
  ]
})
export class ModalsComponent implements OnInit {

  sobreMi: any;
  tecnologiasDestacadas: string[] = [];
  tec1: string[] = [];
  tec2: string[] = [];
  tec3: string[] = [];

  constructor(public modalservice: ModalService,
    private tecSobre: TecnologiaSobreMiService) { }

  ngOnInit(): void {
    this.tecSobre.getTecnologia()
      .subscribe((res: any) => {
        this.tecnologiasDestacadas.push(...res.tecnologia);
        this.tec1 = this.tecnologiasDestacadas.slice(0, 3);
        this.tec2 = this.tecnologiasDestacadas.slice(3, 6);
        this.tec3 = this.tecnologiasDestacadas.slice(6, 8);
      });

    this.tecSobre.getSobreMi()
    .subscribe((res: any) => {
      this.sobreMi = res.sobreMi;
    });
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

  cerrarSobreMi() {
    this.modalservice.cerrarSobreMi();
  }
}
