import { Component, OnInit } from '@angular/core';
import { ImagenesYoService } from '../../services/imagenes-yo.service';
import { Foto } from '../../interfaces/foto';
import { TecnologiaSobreMiService } from '../../services/tecnologia-sobre-mi.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { TooltipService } from '../../services/tooltip.service';


declare let $: any;

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styles: [
  ]
})
export class AjustesComponent implements OnInit {

  fotoSel: Foto;
  tecnologiasDestacadas: string[] = [];
  sobreMiBackend: any;

  constructor(public imagenesYoService: ImagenesYoService,
    public tecnologiaSobreMi: TecnologiaSobreMiService,
    public tooltip: TooltipService) { }

  ngOnInit(): void {
    this.tooltip.abrirTooltip();
    setTimeout(() => {
      this.tooltip.abrirTooltipHoover();
    }, 150);

    this.tecnologiaSobreMi.getTecnologia()
    .subscribe((res: any) => {
      this.tecnologiasDestacadas.push(...res.tecnologia);
    });
    this.tecnologiaSobreMi.getSobreMi()
    .subscribe( async (res: any) => {
      this.sobreMiBackend = await res.sobreMi[0];
    });
  }

  editarImgYo(img: Foto){
    this.fotoSel = img;
    console.log(this.fotoSel.img);

    if (this.fotoSel.img === this.imagenesYoService.img1){
      $('#imagen').modal();
      this.imagenesYoService.imagenNombre = '4a.jpg';
      this.imagenesYoService.imagenPath = this.fotoSel.img;
      this.tooltip.cerrarTooltip();
    }
    if (this.fotoSel.img === this.imagenesYoService.img2){
      $('#imagen').modal();
      this.imagenesYoService.imagenNombre = '5a.jpeg';
      this.imagenesYoService.imagenPath = this.fotoSel.img;
      this.tooltip.cerrarTooltip();
    }
    if (this.fotoSel.img === this.imagenesYoService.img3){
      $('#imagen').modal();
      this.imagenesYoService.imagenNombre = '8a.jpeg';
      this.imagenesYoService.imagenPath = this.fotoSel.img;
      this.tooltip.cerrarTooltip();
    }
    if (this.fotoSel.img === this.imagenesYoService.img4){
      $('#imagen').modal();
      this.imagenesYoService.imagenNombre = '9a.jpeg';
      this.imagenesYoService.imagenPath = this.fotoSel.img;
      this.tooltip.cerrarTooltip();
    }
  }

  editarTec(tec: string){
    this.tecnologiaSobreMi.tecSel = tec;
    setTimeout(() => {
      this.tecnologiaSobreMi.mostrarTec = true;
      $('#tecnologia').modal();
    }, 100);
    this.tooltip.cerrarTooltip();
  }

  actualizarSobreMi(){
    this.tecnologiaSobreMi.mostrarSobreMi = true;
  }

  actualizarSobreMiFull(f: NgForm){
    this.tecnologiaSobreMi.actualizarSobreMi(this.sobreMiBackend, this.sobreMiBackend._id);
    this.cerrarSobreMi();
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 2000
      });
    Toast.fire({
      title: 'SobreMi actualizado',
      background: 'rgb(233,233,0)',
    });
  }

  cerrarSobreMi(){
    this.tecnologiaSobreMi.mostrarSobreMi = false;
  }
}
