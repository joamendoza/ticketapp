import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../ticket.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.page.html',
  styleUrls: ['./ticket-form.page.scss']
})
export class TicketFormPage implements OnInit {
  cliente = { nombre: '', apellido: '', edad: 0 };
  cantidad = 1;
  eventoSeleccionado: any = {};
  tipoEntradaSeleccionado: any = {};

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService, 
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventoSeleccionado = JSON.parse(params['evento']);
      this.tipoEntradaSeleccionado = this.eventoSeleccionado.tipos[0];
    });
    this.reiniciarFormulario();
  }

  reiniciarFormulario() {
    this.cliente = { nombre: '', apellido: '', edad: 0 };
    this.cantidad = 1;
  }

  async enviarFormulario() {
    if (!this.eventoSeleccionado || !this.tipoEntradaSeleccionado.precio) {
      console.error('El evento o el tipo de entrada no están correctamente inicializados');
      return;
    }

    const { precioDescontado, descuento } = this.ticketService.calcularDescuento(this.cliente.edad, this.tipoEntradaSeleccionado.precio);
    const total = precioDescontado * this.cantidad;
    this.ticketService.setDatosTicket({ 
      ...this.ticketService.getDatosTicket(), 
      cliente: this.cliente, 
      cantidad: this.cantidad, 
      evento: this.eventoSeleccionado,
      tipoEntrada: this.tipoEntradaSeleccionado,
      total, 
      descuento: descuento * 100
    });
    console.log('Formulario enviado:', this.ticketService.getDatosTicket());

    const alerta = await this.alertController.create({
      header: 'Éxito',
      message: '¡Ticket comprado con éxito!',
      buttons: ['OK']
    });

    await alerta.present();

    this.router.navigate(['/resumen']);
  }
}