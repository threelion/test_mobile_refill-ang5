import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { RefillService } from '../../services/refill.service';

@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.component.html',
  styleUrls: ['./paymentdetails.component.css']
})
export class PaymentdetailsComponent implements OnInit {
	operator = {
	};

  phone = "8000000000";
  amount = 100;

  showResult = false;
  refillResult = { img: "", msg: "" };

  inputErrors = [];

  constructor(private route: ActivatedRoute, private router: Router, private refillService: RefillService) { 
  	this.operator = JSON.parse(route.snapshot.params['operator']);
  	// console.log(this.operator);
  }

  ngOnInit() {
  }

  onPhoneChange(newVal){
    this.phone = newVal;
  }

  onAmountChange(newVal){
    this.amount = newVal;
  }

  onCloseInfo(){
    this.router.navigate(['']);
  }

  _isDataValid(){
    var result = true;
    
    if (this.phone.length == 0 || this.phone.length != 10){
      this.inputErrors.push('Invalid Phone number!');
      result = false;
    }

    if (! this.amount || this.amount < 1){
      this.inputErrors.push('Invalid Phone number!');
      result = false;
    }

    if (this.amount > 1000){
      this.inputErrors.push('Amount should be less than 1000!');
      result = false;
    }

    return result;
  }

  prepareInfo(data){
    if (data.status == 200){
      this.refillResult.img = "assets/img/success.png";
      this.refillResult.msg = "Phone # " + this.phone + " successfully refilled! You'll receive sms soon" ;
    } else {
      this.refillResult.img = "assets/img/failure.png";
      this.refillResult.msg = data.errorMessage;
    }

  }

  refill(){
    this.inputErrors.length = 0;
   
    if (this._isDataValid()){
      console.log('Data are refillable')
      this.refillService.getData().subscribe( 
        (data) => {
          this.prepareInfo(data);
          this.showResult = true;
        }
      )
    } 
  }
}
