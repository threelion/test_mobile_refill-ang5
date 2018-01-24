import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-phoneinput',
  templateUrl: './phoneinput.component.html',
  styleUrls: ['./phoneinput.component.css']
})
export class PhoneinputComponent implements OnInit {
	// phone = 0;

	@Input() phone;

	@Output() onChange = new EventEmitter();

	changePhone(e){
		this.onChange.emit(e);
	}

  constructor() { }

  ngOnInit() {
  }

}
