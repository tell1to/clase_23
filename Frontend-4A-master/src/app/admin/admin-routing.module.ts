import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CategoriaComponent } from './inventario/components/categoria/categoria.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { ProductoComponent } from './inventario/components/producto/producto.component';
import { NuevoPedidoComponent } from './pedido/components/nuevo-pedido/nuevo-pedido.component';
import { ListaPedidoComponent } from './pedido/components/lista-pedido/lista-pedido.component';

const routes: Routes = [
  {
    path:"",
    component:AppLayoutComponent,
    children:[
      {
        path:"perfil",
        component:PerfilComponent
      },
      {
        path:"categoria",
        component:CategoriaComponent
      },

      {
        path:"producto",
        component:ProductoComponent
      },
      {
        path:"pedido/nuevo",
        component:NuevoPedidoComponent
      },
      {
        path:"pedido",
        component:ListaPedidoComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
