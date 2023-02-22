import Child from "./Child";

enum Gender {
    male,
    female,
  }
  enum HMO{
    Clalit,
    Meuchedet,
    Leumit,
    Macabi
  }
export default class User{
    
     constructor(public firstName:string,
                 public lastName:string,
                  public personalNumber:number,
                  public dateofbirth:Date,
                  public gender:Gender,
                  public hmo:HMO,
                  public children:Child[] ) {
     }
}