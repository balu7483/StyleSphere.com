import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trousers } from '../Trousers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrousersService {

  baseUrl="http://localhost:8080/api/trousers"

  constructor(private http:HttpClient) { }

  public getTrousers(){
    return this.http.get(this.baseUrl+"/trousers")
  }

  public addTrousers(trousers:Trousers):Observable<any>{
    return this.http.post(this.baseUrl+"/insert",trousers)
  }

  public deleteTrouser(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete/${id}`,{responseType: 'text'})
  }

  public updateTrouser(id:number,trousers:Trousers):Observable<any>{
    return this.http.put(`${this.baseUrl}/update/${id}`,trousers, {responseType: 'text'})
  }
}
