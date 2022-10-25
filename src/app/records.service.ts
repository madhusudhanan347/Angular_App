import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  Naruto:string[] =["Naruto Uzumaki",'Rasengan']
  Sasuke:string[] = ["Sasuke Uchiha",'Chidori']
  
  getsasuke() :string[]{
    return this.Sasuke
  }

  getnaruto() :string[]{
    return this.Naruto
  }

  constructor() { }
}
