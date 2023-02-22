import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class userService {
  
  user:User={ firstName:"",lastName:"",personalNumber:0,dateofbirth:new Date(),gender:null,hmo:null,children:[]}

  baseUrlUser="https://localhost:7211/api/User"
  constructor(public http: HttpClient) { }
  
  GetAll(){
    return this.http.get<User[]>(`${this.baseUrlUser}`)
  }
  GetUserById(id:number){
    return this.http.get<User>(`${this.baseUrlUser}/${id}`)
  }
  Login(user:User){
    return this.http.post<User>(`${this.baseUrlUser}`,user)
  }
}
