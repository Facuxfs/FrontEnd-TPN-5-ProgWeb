import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit{
 
  divisa!: Transaccion;
  resultado!:any;
  divisas= [{id:1, name : "USD"},
  {id:2, name : "EUR"},{id:3, name : "JPY"},{id:3, name : "GBP"},{id:3, name : "CHF"},{id:3, name : "CNY"},{id:3, name : "RUB"},{id:3, name : "BRL"},{id:3, name : "ARS"},{id:3, name : "NZD"}];


   constructor(private _http: HttpClient, private router:Router ,private transaccionService:TransaccionService) { 
    this.divisa = new Transaccion();}

 
  cargarDivisas(){
    this.transaccionService.postDivisas(this.divisa.cantidadOrigen,this.divisa.monedaOrigen,this.divisa.monedaDestino).subscribe(
    (result) => {
    //Convertimos los players recibidos en JSON a objetos JavScript
      this.resultado =  result.result;
      this.divisa.cantidadDestino = this.resultado ;
      this.guardarTransaccion();
      },
      error => { alert("Error en la petición"); } )
      }

    guardarTransaccion() {
        this.transaccionService.createTransaccion(this.divisa).subscribe(
          (result: any) => {
            if (result.status == 1){
              alert(result.msg);
            }
      },
          error => {
            alert(error.msg);
          }
        )
      }

      mostrarTransacciones(){
        this.router.navigate(["transaccion-table"])
      }

      mostrarTransaccionesFiltros(monedaOrigen:string,monedaDestino:string){
        this.router.navigate(["transaccion-filtro",monedaOrigen,monedaDestino])
      }

  ngOnInit() {
  }
}
