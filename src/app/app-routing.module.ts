import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiasModule } from './components/noticias/noticias.module';
import { NoticiaCompletaModule } from './components/noticia-completa/noticia-completa.module';
import { AjustesModule } from './components/ajustes/ajustes.module';

const routes: Routes = [
  {path: 'inicio', loadChildren: () => 
  import('./components/inicio/inicio.module').then(m => m.InicioModule)
  },
  {path: 'noticia', loadChildren: () => 
  import('./components/noticias/noticias.module').then(m => m.NoticiasModule)
  },
  {path: 'noticiaCompleta', loadChildren: () => 
  import('./components/noticia-completa/noticia-completa.module').then(m => m.NoticiaCompletaModule)
  },
  {path: 'ajustes', loadChildren: () => 
  import('./components/ajustes/ajustes.module').then(m => m.AjustesModule)
  },
  {path: 'mensajes', loadChildren: () => 
  import('./components/mensajes/mensajes.module').then(m => m.MensajesModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
