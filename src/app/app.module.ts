import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './component/producto/producto.component';
import { ProductoFormComponent } from './component/producto-form/producto-form.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { TransaccionComponent } from './component/transaccion/transaccion.component';
import { TicketComponent } from './component/ticket/ticket.component';
import { TicketFormComponent } from './component/ticket-form/ticket-form.component';
import { TransaccionTableComponent } from './component/transaccion-table/transaccion-table.component';
import { TransaccionFiltroComponent } from './component/transaccion-filtro/transaccion-filtro.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ProductoFormComponent,
    HeaderComponent,
    FooterComponent,
    TransaccionComponent,
    TicketComponent,
    TicketFormComponent,
    TransaccionTableComponent,
    TransaccionFiltroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
