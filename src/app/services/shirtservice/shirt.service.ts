import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shirt } from './Shirt';

@Injectable({
  providedIn: 'root'
})
export class ShirtService {

  baseUrl = "http://localhost:8080/api/shirts"

  constructor(private http: HttpClient) { }

  public getShirts() {
    return this.http.get(this.baseUrl + "/shirts")
  }

  public addShirts(shirt: Shirt): Observable<any> {
    return this.http.post(this.baseUrl + "/insert", shirt)
  }

  public deleteShirt(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' })
  }

  public updateShirt(id: number, shirt: Shirt): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, shirt, { responseType: 'text' })
  }

  public getById(id: number) {
    return this.http.get(`${this.baseUrl}/getId/${id}`)
  }

  public getByName(name: string) {
    return this.http.get(`${this.baseUrl}/getName/${name}`)
  }

  public getByGender(gender: string) {
    return this.http.get(`${this.baseUrl}/getGender/${gender}`)
  }

  public getByBrand(brand: string) {
    return this.http.get(`${this.baseUrl}/getBrand/${brand}`)
  }

  public getByType(type: string) {
    return this.http.get(`${this.baseUrl}/getType/${type}`)
  }

  public getByShirtType(shirtType: string) {
    return this.http.get(`${this.baseUrl}/getShirtType/${shirtType}`)
  }

  public getByprice(price: number) {
    return this.http.get(`${this.baseUrl}/getPrice/${price}`)
  }
}
