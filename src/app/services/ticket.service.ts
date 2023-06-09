import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';
import { Espectador } from '../models/espectador';

@Injectable({
  providedIn: 'root'
})
export class TicketService {


  urlbase:string="http://localhost:3000/api/ticket/"
  constructor(private _http: HttpClient) {
    
   }

   public getTickets():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
      }),
     
      params: new HttpParams()
    }
     return this._http.get(this.urlbase,httpOptions);  
  }

  public getTicketsCategoria(categoria:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
      }),
     //paso parametros desde el front
      params: new HttpParams().append("categoriaEspectador",categoria)
    }
     return this._http.get(this.urlbase+"categoria/?categoriaEspectador="+categoria,httpOptions);  
  }

  public getTicketsEspectador(id:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
      }),
     //paso parametros desde el front
      params: new HttpParams().append("espectador",id)
    }
     return this._http.get(this.urlbase+"espectador/?espectador="+id,httpOptions);  
  }

  public getTicket(id:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
      }),
     
      params: new HttpParams()
    }
     return this._http.get(this.urlbase+id,httpOptions);  
  }

  public createTicket(ticket:Ticket):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),
     
      params: new HttpParams()
    }
    let body = JSON.stringify(ticket)
     return this._http.post(this.urlbase,body,httpOptions); 
  }

  public editTicket(ticket:Ticket):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),
     
      params: new HttpParams()
    }
    let body = JSON.stringify(ticket)
     return this._http.put(this.urlbase+"/"+ticket._id,body,httpOptions); 
  }

  public deleteTicket(ticket:Ticket):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),
     
      params: new HttpParams()
    }
    let body = JSON.stringify(ticket)
     return this._http.delete(this.urlbase+"/"+ticket._id,httpOptions); 
  }
  
}
