import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeComponent } from './bike/bike.component';
import { HomeComponent } from './home/home.component';
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
import { Quote1Component } from './quote1/quote1.component';
import { Quote2Component } from './quote2/quote2.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path: 'car', component:CarComponent },
  {path: 'car1', component:Car1Component },
  {path: 'car2', component:Car2Component },
  {path: 'car3', component:Car3Component },
  {path: 'bike', component:BikeComponent },
  {path: 'bike1', component:Bike1Component},
  {path: 'bike2', component:Bike2Component},
  {path: 'bike3', component:Bike3Component},
  {path: 'health', component:HealthComponent },
  {path: 'health1', component:Health1Component },
  {path: 'health2', component:Health2Component },
  {path: 'health3', component:Health3Component },
  {path: 'homeIns', component:HomeInsComponent },
  {path: 'homeIns1', component:HomeIns1Component },
  {path: 'homeIns2', component:HomeIns2Component },
  {path: 'homeIns3', component:HomeIns3Component },
  {path: 'quote', component:QuoteComponent },
  {path: 'quote1', component:Quote1Component },
  {path: 'quote2', component:Quote2Component },
  {path: 'register', component:RegisterComponent },
  {path: 'login', component:LoginComponent },
  {path: 'payment', component:PaymentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
