import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shoes } from '../Shoes';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {

  baseUrl='http://localhost:8080/api/shoes'

  constructor(private http:HttpClient) { }

  public getShoes(){
    return this.http.get(this.baseUrl+"/shoes")
  }

  public addShoes(shoes:Shoes):Observable<any>{
    return this.http.post(`${this.baseUrl}/insert`,shoes)
  }

  public updateShoes(shoes:Shoes,id:number):Observable<any>{
    return this.http.put(`${this.baseUrl}/update/${id}`,shoes,{responseType:'text'})
  }

  public deleteShoes(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete/${id}`,{responseType :'text'})
  }

  
}
