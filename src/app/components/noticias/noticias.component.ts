import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../../services/noticia.service';
import { Router } from '@angular/router';
import { Noticia, RespuestaNoticia } from 'src/app/interfaces/noticias';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styles: [
  ]
})
export class NoticiasComponent implements OnInit {

  noticias: Noticia[] = [];
  paginasLength = true;

  constructor(public noticiaservice: NoticiaService,
    private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.noticiaservice.noticiaCompleta = false;
    //Obtener noticias
    this.noticiaservice.getUltimasNoticias()
      .subscribe((res: RespuestaNoticia) => {
        this.noticias.push(...res.noticias);
      });
  }

  mostrarNoticia(noticia: any){
    this.noticiaservice.noticiaSel = noticia;
    console.log(this.noticiaservice.noticiaSel);
    this.router.navigateByUrl('/noticiaCompleta');
    this.noticiaservice.noticiaCompleta = true;
  }
  restar(){
    this.paginasLength = true;
    this.noticiaservice.getNoticiasPaginadasMenos()
    .subscribe((res: RespuestaNoticia) => {
      this.noticias = res.noticias;
    });
    window.scrollTo(0, 0);
  }

  sumar(){
    this.noticiaservice.getNoticiasPaginadasMas()
    .subscribe((res: RespuestaNoticia) => {
      this.noticias = res.noticias;
      if (res.noticias.length !== 8){
        this.paginasLength = false;
      }
      if (res.noticias.length === 0){
        this.restar();
        this.paginasLength = false;
      }
    });
    window.scrollTo(0, 0);
  }
}
