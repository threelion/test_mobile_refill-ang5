import { Component, OnInit } from '@angular/core';
import { OPERATORS } from '../../constants/operators'

@Component({
  selector: 'app-operatorlist',
  templateUrl: './operatorlist.component.html',
  styleUrls: ['./operatorlist.component.css']
})
export class OperatorlistComponent implements OnInit {
	operators = OPERATORS;

  constructor() { }

  ngOnInit() {
  }

}
