import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ImagenesYoService {

  img1 = `${URL}/uploadYo/andres-apa/4a.jpg`;
  img2 = `${URL}/uploadYo/andres-apa/5a.jpeg`;
  img3 = `${URL}/uploadYo/andres-apa/8a.jpeg`;
  img4 = `${URL}/uploadYo/andres-apa/9a.jpeg`;

  constructor() { }
}
