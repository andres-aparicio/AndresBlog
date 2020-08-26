import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const URL = environment.url;

@Pipe({
  name: 'imagenYo'
})
export class ImagenYoPipe implements PipeTransform {

  transform(img: string): string {
    return `${URL}/noticias/imgYo/${img}`;
  }

}
