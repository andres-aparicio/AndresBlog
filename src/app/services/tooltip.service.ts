import { Injectable } from '@angular/core';

declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  constructor() { }

  abrirTooltip(){
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  abrirTooltipHoover(){
    $(() => {
      $('[data-toggle="tooltip"]').tooltip({
          trigger: 'hover'
        });
    });
  }

  cerrarTooltip(){
      $('[data-toggle="tooltip"]').tooltip('hide');
  }
}
