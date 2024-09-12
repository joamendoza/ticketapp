import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-eventos',
    pathMatch: 'full'
  },
  {
    path: 'lista-eventos',
    loadChildren: () => import('./lista-eventos/lista-eventos.module').then(m => m.ListaEventosPageModule)
  },
  {
    path: 'ticket-form',
    loadChildren: () => import('./ticket-form/ticket-form.module').then(m => m.TicketFormPageModule)
  },
  {
    path: 'resumen',
    loadChildren: () => import('./resumen/resumen.module').then(m => m.ResumenPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }