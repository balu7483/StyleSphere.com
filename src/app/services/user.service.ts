import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders} from '@angular/common/http'
import { User } from '../User';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl="http://localhost:8080/api/user"

  constructor(private http:HttpClient) { }

  public getUser(){
    return this.http.get(this.baseUrl+"/user")
  }

  public addUser(user:User):Observable<any>{
    return this.http.post(this.baseUrl+"/userAdd",user)
  }

  updateUser(id: number, newUser: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`,newUser,{ responseType: 'text' });
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete/${id}`,{ responseType: 'text' })
  }

  searchEmail(email:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/getEmail/${email}`)
  }

  login(email:string,password:string):Observable<any>{
    return this.http.post(`${this.baseUrl}/login`,email,{responseType:'text'})
  }

  getUserById(id: number) {
   return this.http.get(`${this.baseUrl}/getId/${id}`)
}


}
