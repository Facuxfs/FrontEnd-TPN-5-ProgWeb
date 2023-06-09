import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-transaccion-filtro',
  templateUrl: './transaccion-filtro.component.html',
  styleUrls: ['./transaccion-filtro.component.css']
})
export class TransaccionFiltroComponent implements OnInit{

  monedaOrigen:string="";
  monedaDestino:string="";
  transacciones!:Array<Transaccion>;
  constructor(private transaccionService:TransaccionService, private router:Router, private activateRoute: ActivatedRoute){

  }

  cargarTransacciones(){
    this.transaccionService.getTransaccionesFiltradas(this.monedaOrigen,this.monedaDestino).subscribe(
      result =>{
        console.log(result)
        this.transacciones = new Array<Transaccion>();
        let unaTransaccion:Transaccion = new Transaccion();
          result.forEach((element:any) => {
          Object.assign(unaTransaccion,element)
          this.transacciones.push(unaTransaccion)
          unaTransaccion = new Transaccion();
        });
      } ,
      error=>{
      }
    )
  }

  botonAtras(){
    this.router.navigate(["transaccion"])
  }
  ngOnInit(): void {
     this.activateRoute.params.subscribe(params=>{   
        this.monedaOrigen = params['origen'];
        this.monedaDestino = params['destino'];
        this.cargarTransacciones();  
    })
  }

}
