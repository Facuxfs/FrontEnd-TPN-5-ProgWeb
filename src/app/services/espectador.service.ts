import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspectadorService {

  urlbase:string="http://localhost:3000/api/espectador/"

  constructor(private _http: HttpClient) { }

  public getEspectadores():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
      }),
     
      params: new HttpParams()
    }
     return this._http.get(this.urlbase,httpOptions);  
  }
}
