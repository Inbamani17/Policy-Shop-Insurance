import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BikeComponent } from './bike/bike.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Bike1Component } from './bike1/bike1.component';
import { Bike2Component } from './bike2/bike2.component';
import { Bike3Component } from './bike3/bike3.component';
import { CarComponent } from './car/car.component';
import { Car1Component } from './car1/car1.component';
import { Car2Component } from './car2/car2.component';
import { Car3Component } from './car3/car3.component';
import { HealthComponent } from './health/health.component';
import { Health1Component } from './health1/health1.component';
import { Health2Component } from './health2/health2.component';
import { Health3Component } from './health3/health3.component';
import { HomeInsComponent } from './home-ins/home-ins.component';
import { HomeIns1Component } from './home-ins1/home-ins1.component';
import { HomeIns2Component } from './home-ins2/home-ins2.component';
import { HomeIns3Component } from './home-ins3/home-ins3.component';
import { QuoteComponent } from './quote/quote.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Quote1Component } from './quote1/quote1.component';
import { Quote2Component } from './quote2/quote2.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BikeComponent,
    Bike1Component,
    Bike2Component,
    Bike3Component,
    CarComponent,
    Car1Component,
    Car2Component,
    Car3Component,
    HealthComponent,
    Health1Component,
    Health2Component,
    Health3Component,
    HomeInsComponent,
    HomeIns1Component,
    HomeIns2Component,
    HomeIns3Component,
    QuoteComponent,
    RegisterComponent,
    LoginComponent,
    Quote1Component,
    Quote2Component,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
