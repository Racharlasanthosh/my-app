import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {


public name:string ="";
public age: number =0;
public company:string ="";
public package: number =0;

public employees:any =[
  {name:'ajay',age:20,company:'tcs',package:15},
  {name:'anil',age:16,company:'hcl',package:9}
]

  constructor() { }

  ngOnInit(): void {
  }

  register(){
    let employee ={
      name:this.name,
      age: this.company,
      company:this.company,
      package:this.package
    }

    this.employees.push(employee)

    
  }

}