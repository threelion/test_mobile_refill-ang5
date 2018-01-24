import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simpleoperator',
  templateUrl: './simpleoperator.component.html',
  styleUrls: ['./simpleoperator.component.css']
})
export class SimpleoperatorComponent implements OnInit {

  @Input() operator;


  gotoDetails(oper){
  	this.router.navigate(['paymentdetails', { "operator": JSON.stringify(oper) }])
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
