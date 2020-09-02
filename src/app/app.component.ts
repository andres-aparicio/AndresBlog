import { Component } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FedericaDJ';

  constructor(){
    setTimeout(() => {
      $('#cookieModal').modal();
      window.scrollTo(0, 0);
    }, 100);
  }

  salir(){
    setTimeout(() => {
      window.history.back();
    }, 400);
  }
}
