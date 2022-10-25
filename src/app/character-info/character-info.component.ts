import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css'],
  providers:[RecordsService]
})
export class CharacterInfoComponent implements OnInit {

  rinfosasuke: string[]=[];
  rinfonaruto: string[]=[];

  getinfosasuke(){
    this.rinfosasuke = this.rservices.getsasuke()
  }

  getinfonaruto(){
    this.rinfonaruto = this.rservices.getnaruto()
  }


  constructor(private rservices: RecordsService) { }

  ngOnInit(): void {
  }

}
