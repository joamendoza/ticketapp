import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
})
export class ResumenPage implements OnInit {
  datosTicket: any;

  constructor(private ticketService: TicketService, private router: Router) {}

  ngOnInit() {
    this.datosTicket = this.ticketService.getDatosTicket();
    if (!this.datosTicket || !this.datosTicket.cliente) {
      console.error('Los datos del ticket no están correctamente inicializados');
    }
  }

  irInicio() {
    this.router.navigate(['/lista-eventos']);
  }
}