import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { PaymentdetailsComponent } from "./components/paymentdetails/paymentdetails.component";

const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "paymentdetails",
		component: PaymentdetailsComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
