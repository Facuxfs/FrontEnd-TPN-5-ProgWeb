import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './component/producto/producto.component';
import { ProductoFormComponent } from './component/producto-form/producto-form.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { TransaccionComponent } from './component/transaccion/transaccion.component';
import { TicketComponent } from './component/ticket/ticket.component';
import { TicketFormComponent } from './component/ticket-form/ticket-form.component';
import { TransaccionTableComponent } from './component/transaccion-table/transaccion-table.component';
import { TransaccionFiltroComponent } from './component/transaccion-filtro/transaccion-filtro.component';

const routes: Routes = [
  {path:"footer", component:FooterComponent},
  {path:"header", component:HeaderComponent},
  {path:'producto' , component:ProductoComponent},
  {path:'transaccion' , component:TransaccionComponent},
  {path:'transaccion-table' , component:TransaccionTableComponent},
  {path:'transaccion-filtro/:origen/:destino' , component:TransaccionFiltroComponent},
  {path:'producto-form/:id' , component:ProductoFormComponent},
  {path:"ticket", component:TicketComponent},
  {path:"ticket-form/:id", component:TicketFormComponent},
  {path:"", redirectTo: '/producto' , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
