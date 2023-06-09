import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-transaccion-table',
  templateUrl: './transaccion-table.component.html',
  styleUrls: ['./transaccion-table.component.css']
})
export class TransaccionTableComponent implements OnInit{

transacciones!:Array<Transaccion>;

constructor(private transaccionService:TransaccionService, private activateRoute: ActivatedRoute , private router:Router){
 this.cargarTransacciones();
}

cargarTransacciones(){
  this.transaccionService.getTransacciones().subscribe(
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
   
 }
}
