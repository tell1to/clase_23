import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrl: './lista-pedido.component.scss'
})
export class ListaPedidoComponent {
  mostrar_pedido: boolean = false;
  detalle_pedido: any=null; 
  pedidos : any=[{
    id:3,
    fecha: "2024-01-01",
    cliente:{
      nombre_completo:"Raul Paez",
      dni: "123456789",
      telefono: "987654321",
    },
    productos:[
      {
        id:2,
        cantidad: 1,
      },
      {
        id:5,
        cantidad: 2,
      }
    ]
  },

  {
    id:4,
    fecha: "2024-01-02",
    cliente:{
      nombre_completo:"Luis Ramirez",
      dni: "987654321",
      telefono: "123456789",
    },
    productos:[
      {
        id:3,
        cantidad: 1,
      },
      {
        id:4,
        cantidad: 2,
      }
    ]
  }


];

getPedidos(){}
    
showDialogPedido(pedido: any) {
  this.mostrar_pedido = true;
  this.detalle_pedido = pedido;
}
}
