import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiaService } from '../../services/noticia.service';
import { ImagenesYoService } from '../../services/imagenes-yo.service';
import { Noticia, RespuestaNoticia } from '../../interfaces/noticias';
import { TooltipService } from '../../services/tooltip.service';

declare let $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {

  mostrarYo = true;
  noticias: Noticia[] = [];

  constructor(
    private router: Router,
    public noticiaservice: NoticiaService,
    public imagenesYo: ImagenesYoService,
    public tooltip: TooltipService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.tooltip.abrirTooltipHoover();
    }, 150);

    this.noticiaservice.noticiaCompleta = false;

    //Obtener 3 ultimas noticias

    this.noticiaservice.getUltimasNoticias()
      .subscribe((res: RespuestaNoticia) => {
        this.noticias.push(...res.noticias.slice(0, 3));
      });
  }

  yoMostrar() {
    this.mostrarYo = !this.mostrarYo;
  }

  tecnologias() {
    $('#modalTecnologias').modal();
  }

  sobreMi() {
    $('#sobreMi').modal();
  }

  mostrarNoticia(noticia: Noticia) {
    this.tooltip.cerrarTooltip();
    this.noticiaservice.noticiaCompleta = true;
    this.noticiaservice.noticiaSel = noticia;
    setTimeout(() => {
      this.router.navigateByUrl('noticiaCompleta');
    }, 100);
  }

}
