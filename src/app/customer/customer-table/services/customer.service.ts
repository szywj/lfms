import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Customer } from '../../../interfaces/customer';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomerService {

  constructor(private http: Http) { }

  getCustomers() {
    return this.http.get('/assets/mock-data/customer-mock.json')
                .toPromise()
                .then(res => <Customer[]>res.json().data)
                .then(data => data);
  }

}
