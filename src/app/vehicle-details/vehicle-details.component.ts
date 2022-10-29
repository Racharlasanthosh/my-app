import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleserviceService } from '../vehicleservice.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  public id:string ="";
  public vehicle:any={};

  constructor(private _activeRoute:ActivatedRoute,private _vehicleService:VehicleserviceService) {
    this._activeRoute.params.subscribe(
      (data:any)=>{
        this.vehicle =this.id;

        this._vehicleService.getVehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicle=data;
          }
        )
      }
    )
   }

  ngOnInit(): void {
  }

}
