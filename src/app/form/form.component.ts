import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Child from 'src/models/Child';
import User from 'src/models/User';
import { ChildService } from '../services/child.service';
import { userService } from '../services/user.service';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(public userSer:userService,public childSer:ChildService, public router:Router) {
     this.user=userSer.user;
     this.child=childSer.child;
   }

  ngOnInit(): void {
    
  }
  isChild:boolean;
  user:User;
  child:Child;
  childArr:Child[]=[];
  usersArr:User[]=[];
  dataXcel=[];

   Login(){
    console.log("Login");
    this.saveMoreUser(); 
   }
   
  saveMoreUser(){
    console.log("i save more user");
    this.user.gender=(Number)(this.user.gender);
    this.user.hmo=(Number)(this.user.hmo);
    this.user.children=this.childArr;
    this.userSer.Login(this.user).subscribe((succ)=>{
       console.log("succeed");
       this.saveAsXlsx();
       this.user= new User(null,null,null,null,null,null,null);
       this.childArr=[];
    },
    (err)=>{
      alert("התרחשה שגיאה בקבלת הנתונים");
    })
  }
   saveMoreChild(){
    console.log("i save more child");
    this.childArr.push(this.child);
    this.child= new Child("",0,new Date());
  }

  fileName= 'UserDetails.xlsx'; 
  saveAsXlsx(): void 
  {
     let element = this.user; 
     const ws: XLSX.WorkSheet =XLSX.utils.json_to_sheet([this.user],{header:[''],skipHeader:true});
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
     XLSX.writeFile(wb, this.fileName);
  }
}

   
