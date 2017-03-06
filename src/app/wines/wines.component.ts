import { Component, OnInit } from '@angular/core';
import { WinesService } from './wineservice.service';
import { Wines } from './wines.model';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.css']
})
export class WinesComponent implements OnInit {

  constructor(private _winesService: WinesService){

    }
    wines:Wines[];

   getAllWines(){
     
        this._winesService.getAllWines().subscribe(
            data=>this.wines=data,
            error=>console.log(error),
            ()=>console.log("Completed!")
        )
    }

  ngOnInit() {
    this.getAllWines();
  }

}
