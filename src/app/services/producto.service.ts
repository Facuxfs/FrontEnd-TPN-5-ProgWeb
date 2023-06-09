import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  urlbase:string="http://localhost:3000/api/producto"
  constructor(private _http: HttpClient) { }

  public getProductos():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
      }),
     
      params: new HttpParams()
    }
     return this._http.get(this.urlbase,httpOptions);  
  }

  public getProductosDestacados():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
      }),
     
      params: new HttpParams()
    }
     return this._http.get(this.urlbase+"/destacados",httpOptions);  
  }

  
public getProducto(id:string):Observable<any>{
  let httpOptions = {
    headers: new HttpHeaders({
    }),
   
    params: new HttpParams()
  }
   return this._http.get(this.urlbase+"/"+id,httpOptions);  
}

public createProducto(producto:Producto):Observable<any>{
  let httpOptions = {
    headers: new HttpHeaders({
      "Content-type": "application/json"
    }),
   
    params: new HttpParams()
  }
  let body = JSON.stringify(producto)
   return this._http.post(this.urlbase,body,httpOptions); 
}

public editProducto(producto:Producto):Observable<any>{
  let httpOptions = {
    headers: new HttpHeaders({
      "Content-type": "application/json"
    }),
   
    params: new HttpParams()
  }
  let body = JSON.stringify(producto)
   return this._http.put(this.urlbase+"/"+producto._id,body,httpOptions); 
}

public deleteProducto(producto:Producto):Observable<any>{
  let httpOptions = {
    headers: new HttpHeaders({
      "Content-type": "application/json"
    }),
   
    params: new HttpParams()
  }
  let body = JSON.stringify(producto)
   return this._http.delete(this.urlbase+"/"+producto._id,httpOptions); 
}

}
