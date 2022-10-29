import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public accountform:FormGroup =new FormGroup (
    {
      createdAt:new FormControl(),
      account_name:new FormControl(),
      available_balance:new FormControl(),
      currency:new FormControl(),
      image:new FormControl(),
      
    }
  )

  constructor(private _bankService: BankService) { }

  ngOnInit(): void {
  }
  submit(){
    this._bankService.createaccount(this.accountform.value).subscribe(
      (data:any)=>{
        alert("created succuesfully");
      },
      (data:any)=>{
        alert("inter error")
      }
    )
  }
  

}
