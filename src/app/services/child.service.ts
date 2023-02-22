import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Child from 'src/models/Child';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  child:Child={name:"",personalNumber:0,birthDate:new Date(),}
  
  baseUrlChild="https://localhost:7211/api/Children"
  constructor(public http:HttpClient) { }

  addChild(child:Child){
    return this.http.post<Child>(`${this.baseUrlChild}`,child);
  }
}
