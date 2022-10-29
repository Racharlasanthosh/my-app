import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { CartComponent } from './cart/cart.component';
import { AmazonComponent } from './amazon/amazon.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { PackagePipe } from './package.pipe';
import { AgePipe } from './age.pipe';
import { PercentagePipe } from './percentage.pipe';
import { CarsComponent } from './cars/cars.component';
import { StarsComponent } from './stars/stars.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { GpayComponent } from './gpay/gpay.component';
import { BankComponent } from './bank/bank.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleComponent } from './vehicle./vehicle..component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { TypecoderComponent } from './typecoder/typecoder.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbordComponent,
    PagenotfoundComponent,
    CalculatorComponent,
    InterpolationComponent,
    EventbindingComponent,
    TwoWayBindingComponent,
    RectangleComponent,
    SquareComponent,
    EmployeeRegistrationComponent,
    CartComponent,
    AmazonComponent,
    PipesComponent,
    PricePipe,
    PackagePipe,
    AgePipe,
    PercentagePipe,
    CarsComponent,
    StarsComponent,
    SimpleformComponent,
    GpayComponent,
    BankComponent,
    VehicleComponent,
    FlipcartComponent,
    TypecoderComponent,
    BankDetailsComponent,
    VehicleDetailsComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
