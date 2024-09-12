import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EVENTOS } from '../eventos';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.page.html',
  styleUrls: ['./lista-eventos.page.scss']
})
export class ListaEventosPage implements OnInit {
  eventos = EVENTOS;

  constructor(private router: Router) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.reproducirAnimacion();
  }

  seleccionarEvento(evento: any) {
    this.router.navigate(['/ticket-form', { evento: JSON.stringify(evento) }]);
  }

  reproducirAnimacion() {
    const titulo = document.querySelector('ion-title');
    if (titulo) {
      titulo.animate([
        { opacity: '0', transform: 'translateY(-20px)' },
        { opacity: '1', transform: 'translateY(0)' }
      ], {
        duration: 1000,
        easing: 'ease-out'
      });
    }
  }
}