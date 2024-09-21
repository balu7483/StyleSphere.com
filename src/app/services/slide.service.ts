import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Slides } from '../Slides';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  baseUrl='http://localhost:8080/api/slides'

  constructor(private http:HttpClient) { }

  public getSlides(){
    return this.http.get(this.baseUrl+"/getAll")
  }

  public addSlides(slides:Slides):Observable<any>{
    return this.http.post(`${this.baseUrl}/insert`,slides)
  }

  public updateSlides(slides:Slides,id:number):Observable<any>{
    return this.http.put(`${this.baseUrl}/update/${id}`,slides,{responseType:'text'})
  }

  public deleteSlides(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete/${id}`,{responseType :'text'})
  }

  
}

