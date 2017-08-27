import { Component, OnInit } from '@angular/core';
import { CustomerService } from './services/customer.service';
import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  customers: Customer[];
  cols: any[];

  constructor( private customerService: CustomerService ) {
  }

  ngOnInit() {
    this.customerService.getCustomers().then(customers => this.customers = customers);

    this.cols = [
      {field: 'customerNo', header: 'Customer No' },
      {field: 'customerType', header: 'Customer Type' },
      {field: 'customerName', header: 'Customer Name' },
      {field: 'customerState', header: 'Customer State' },
      {field: 'customerCreditLimit', header: 'Customer Credit Limit' },
      {field: 'customerManager', header: 'Customer Manager' },
      {field: 'customerCreationDate', header: 'Customer Creation Date' },
      {field: 'customerLastUpdateDate', header: 'Customer Last Update Date' }

    ];
  }

}
