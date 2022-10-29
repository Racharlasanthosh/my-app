import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public name:string="";
  public price:number=0;
  public quantity:number=0;

  public carts:any =[
    {name:'' ,price:0,quantity:0}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  addtocart(){
    let cart={
      name:this.name,
      quantity:this.quantity,
      price:this.price,
    }
    this.carts.push(cart)

    this.name="",
    this.quantity=0
    this.price=0,

    alert("cart succesfully added")
    
  }
  delete(i:number){
    this.carts.splice(i,1);
  }
  edit(i:number){
    this.carts.splice(i,1);
  }

}
