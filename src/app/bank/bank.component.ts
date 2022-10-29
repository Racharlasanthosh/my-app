import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
   
  public accounts:any =[];
  public term:string="";
  public column:string="";
  public order:string="";

  constructor(private _bankService:BankService,private router:Router) { 
     this._bankService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
     )
     
    }
    pagination(page:number){
      this._bankService.getpagedAccounts(page).subscribe(
        (data:any)=>{
          this.accounts = data;
        },
        (err:any)=>{
          alert("Internal server error")
        } 
      )
    }
    sort(){
      this._bankService.getsortedAccounts(this.column,this.order).subscribe(
        (data:any)=>{
          this.accounts=data;
        },
        (err:any)=>{
          alert("internal server erroe")
        }
      )
    }

    delete(id:string){
      this._bankService.deleteaccount(id).subscribe(
        (data:any)=>{
          alert("deleted succesfuffy ");
          location.reload();
        },
        (err:any)=>{
          alert("internal server error");
        }
      )
    }

   

  ngOnInit(): void {
  }
  view(id:string){
        this.router.navigateByUrl('/dashboard/bank-details/'+id);
  }

}

