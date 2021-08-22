import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paises } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string ="https://restcountries.eu/rest/v2";

  get httpParams(){
    return new HttpParams().set("fields","name;capital;alpha2Code;flag;population;translations");
  }

  constructor(private http:HttpClient) { }

  buscarPais(termino:string):Observable<Paises[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Paises[]>(url,{params: this.httpParams} );
  }

  buscarCapital(termino:string):Observable<Paises[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Paises[]>( url,{params: this.httpParams}  );
  }

  getPaisPorAlpha(id:string):Observable<Paises>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Paises>( url,{params: this.httpParams}  );
  }

  getPaisPorRegion(region:string):Observable<Paises[]>{
    
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Paises[]>( url,{params: this.httpParams} );
  }

}
