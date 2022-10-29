import { Interpolation } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonComponent } from './amazon/amazon.component';
import { AuthGuard } from './auth.guard';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BankComponent } from './bank/bank.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { GpayComponent } from './gpay/gpay.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { SquareComponent } from './square/square.component';
import { StarsComponent } from './stars/stars.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TypecoderComponent } from './typecoder/typecoder.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleComponent } from './vehicle./vehicle..component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'dashboard',component: DashbordComponent,canActivate:[], children:[
    {path:'calculator',component:CalculatorComponent},
    {path:'interpolation',component:InterpolationComponent},
    {path:'event-binding',component:EventbindingComponent},
    {path:'two-way-binding',component:TwoWayBindingComponent},
    {path:'rectangle', component: RectangleComponent},
    {path:'square',component: SquareComponent},
    {path:'employee-registration',component:EmployeeRegistrationComponent,canDeactivate:[NotifyGuard]},
    {path:'cart',component:CartComponent},
    {path:'amazon',component:AmazonComponent},
    {path:'pipes',component:PipesComponent},
    {path:'cars',component:CarsComponent},
    {path:'stars',component:StarsComponent},
    {path:'simpleform',component:SimpleformComponent},
    {path:'gpay', component:GpayComponent},
    {path:'bank',component:BankComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'typecoder',component:TypecoderComponent},
    {path:'flipcart',component:FlipcartComponent},
    {path:'bank-details/:id',component:BankDetailsComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'create-account',component:CreateAccountComponent,canDeactivate:[NotifyGuard]}

  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
