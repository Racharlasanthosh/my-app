import { Component, OnInit } from '@angular/core';
import { FlipcartService } from '../flipcart.service';

@Component({
  selector: 'app-flipcart',
  templateUrl: './flipcart.component.html',
  styleUrls: ['./flipcart.component.css']
})
export class FlipcartComponent implements OnInit {
  public products:any=[];

  constructor(private _flipcartservice:FlipcartService) { 
    this._flipcartservice.getproducts().subscribe(
      (data:any)=>{
        this.products = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
      )
      
    
  }

  ngOnInit(): void {
  }

}
