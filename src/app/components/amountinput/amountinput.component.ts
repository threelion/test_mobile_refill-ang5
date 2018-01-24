import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-amountinput',
  templateUrl: './amountinput.component.html',
  styleUrls: ['./amountinput.component.css']
})
export class AmountinputComponent implements OnInit {
	
	@Input() amount;

	@Output() onChange = new EventEmitter();

	changeAmount(e){
		this.onChange.emit(e);
	}
  constructor() { }

  ngOnInit() {
  }

}
