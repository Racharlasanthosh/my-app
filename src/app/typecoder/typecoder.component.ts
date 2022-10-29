import { Component, OnInit } from '@angular/core';
import { TypecoderService } from '../typecoder.service';

@Component({
  selector: 'app-typecoder',
  templateUrl: './typecoder.component.html',
  styleUrls: ['./typecoder.component.css']
})
export class TypecoderComponent implements OnInit {
  public typecoder:any=[];


  constructor(private _typecoderservice:TypecoderService) { 
    this._typecoderservice.gettypecoders().subscribe(
      (data:any)=>{
        this.typecoder =data;
      },
      (error:any)=>{

        alert("internal server error");
      }
    )
      
    }

  ngOnInit(): void {
  }

}
