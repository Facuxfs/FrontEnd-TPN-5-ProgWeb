import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit{

  accion:string="";
  producto!:Producto;

  constructor(private activateRoute: ActivatedRoute, private serviceProducto:ProductoService, private router:Router){
    this.producto = new Producto();
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      if (params['id']=="0"){
        this.accion = "new";
      }else{
        this.accion="update";
        this.cargarProducto(params['id'])
      }
    })
  }

  cargarProducto(id:string){
    this.serviceProducto.getProducto(id).subscribe(
      result=>{
        console.log(result)
        Object.assign(this.producto,result);
      },
      error=>{
      }
    );
  }

  guardarProducto() {
    this.serviceProducto.createProducto(this.producto).subscribe(
      (result: any) => {
        if (result.status == 1){
          alert(result.msg);
          this.router.navigate(["producto"])
        }
  },
      error => {
        alert(error.msg);
      }
    )
  }

  modificarProducto(){
    this.serviceProducto.editProducto(this.producto).subscribe(
      (result: any) => {
        if (result.status == 1){
          alert(result.msg);
          this.router.navigate(["producto"])
        }
  },
      error => {
        alert(error.msg);
      }
    )
  }
  
botonAtras(){
  this.router.navigate(["producto"])
}
}
