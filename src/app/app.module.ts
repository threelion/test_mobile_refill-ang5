import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPhoneMaskModule } from 'ngx-phone-mask-rus';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentdetailsComponent } from './components/paymentdetails/paymentdetails.component';
import { OperatorlistComponent } from './components/operatorlist/operatorlist.component';
import { SimpleoperatorComponent } from './components/simpleoperator/simpleoperator.component';
import { PhoneinputComponent } from './components/phoneinput/phoneinput.component';
import { AmountinputComponent } from './components/amountinput/amountinput.component';
import { InfowindowComponent } from './components/infowindow/infowindow.component';

import { RefillService } from './services/refill.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentdetailsComponent,
    OperatorlistComponent,
    SimpleoperatorComponent,
    PhoneinputComponent,
    AmountinputComponent,
    InfowindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPhoneMaskModule
  ],
  providers: [RefillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
