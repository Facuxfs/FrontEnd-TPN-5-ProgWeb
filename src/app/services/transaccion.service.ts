import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {


  urlbase:string="http://localhost:3000/api/transaccion/"
  constructor(private _http: HttpClient) {}


  public postDivisas(valor:string,inicio:string,conversion:string):Observable<any>{
    // petición por get a esa url de un api rest
    const httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '68dfdb585dmsh2334165dcb7887ap1d34fajsn85ca59e6a478',
      'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
    }),
    };
    const body = new HttpParams()
      .set ('from-value', valor )
      .set ('from-type',inicio)
      .set ('to-type',conversion)
    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",body,httpOptions);
    }

    public createTransaccion(transaccion:Transaccion):Observable<any>{
      let httpOptions = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        }),
       
        params: new HttpParams()
      }
      let body = JSON.stringify(transaccion)
       return this._http.post(this.urlbase,body,httpOptions); 
    } 
 
    public getTransacciones():Observable<any>{
      let httpOptions = {
        headers: new HttpHeaders({
        }),
       
        params: new HttpParams()
      }
       return this._http.get(this.urlbase,httpOptions);  
    }
  
    public getTransaccionesFiltradas(monedaOrigen:string,monedaDestino:string):Observable<any>{
      let httpOptions = {
        headers: new HttpHeaders({
        }),
       
        params: new HttpParams()
      }
       return this._http.get(this.urlbase+"/divisas?monedaOrigen="+monedaOrigen+"&monedaDestino="+monedaDestino,httpOptions);  
    }
  
}
