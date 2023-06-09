import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit{

  productos!:Array<Producto>;

  constructor(private productoService:ProductoService , private router:Router){
    this.productos = new Array<Producto>();
    this.obtenerProductos();
  }

obtenerProductos(){
  this.productoService.getProductos().subscribe(
    result =>{
      console.log(result)
      this.productos = new Array<Producto>();
      let unProducto:Producto = new Producto();
        result.forEach((element:any) => {
        Object.assign(unProducto,element)
        this.productos.push(unProducto)
        unProducto = new Producto();
      });
    } ,
    error=>{
    }
  )
}

obtenerProductosDestacados(){
  this.productoService.getProductosDestacados().subscribe(
    result =>{
      console.log(result)
      this.productos = new Array<Producto>();
      let unProducto:Producto = new Producto();
        result.forEach((element:any) => {
        Object.assign(unProducto,element)
        this.productos.push(unProducto)
        unProducto = new Producto();
      });
    } ,
    error=>{
    }
  )
}

agregarProducto(){
  this.router.navigate(["producto-form",0])
}

modificarProducto(producto:Producto){
this.router.navigate(["producto-form",producto._id])
}

eliminarProducto(producto:Producto){
  this.productoService.deleteProducto(producto).subscribe(
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

ngOnInit(): void {
  }

}
