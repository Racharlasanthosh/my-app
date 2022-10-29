import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { zip } from 'rxjs';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  public id:string ="";
  public account:any ={};

  constructor(private _bankService:BankService,   private ActivatedRoute:ActivatedRoute) { 
    
    this.ActivatedRoute.params.subscribe(
      (data:any)=>{
        this.id=data.id;

        this._bankService.getaccount(data.id).subscribe(
        (data:any)=>{
          this.account =data;
        }
        )
      }
    )
  }

  ngOnInit(): void {
  }

}
