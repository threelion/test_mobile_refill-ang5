import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class RefillService {

  constructor(private http: HttpClient) { }

  getData(){
  	if (Math.random() > 0.3)
  		return this.http.get('/assets/json/success.json')
  	else 
  		return this.http.get('/assets/json/failure.json')
	}
}
