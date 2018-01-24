import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-infowindow',
  templateUrl: './infowindow.component.html',
  styleUrls: ['./infowindow.component.css']
})
export class InfowindowComponent implements OnInit {

  @Input() message;

  @Output() onclose = new EventEmitter();

  onClose(){
  	console.log('closing info...')
  	this.onclose.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
