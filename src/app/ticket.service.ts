import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private datosTicket: any = {};

  constructor() {}

  setDatosTicket(datos: any) {
    this.datosTicket = datos;
  }

  getDatosTicket() {
    return this.datosTicket;
  }

  calcularDescuento(edad: number, precio: number) {
    let descuento = 0;
    if (edad < 18) {
      descuento = 0.2;
    } else if (edad >= 65) {
      descuento = 0.3;
    }
    const precioDescontado = precio * (1 - descuento);
    return { precioDescontado, descuento };
  }
}