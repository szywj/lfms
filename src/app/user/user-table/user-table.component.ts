import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/primeng';
import { CustomerService } from './services/customer.service';
import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  datasource: Customer[];
  customers: Customer[];
  cols: any[];
  totalRecords: number;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customerService.getCustomers().then(datasource => {
      this.datasource = datasource;
      this.totalRecords = datasource.length;
      this.customers = datasource.slice(0, 3);
    });

    this.cols = [
      { field: 'customerNo', header: 'Customer No' },
      { field: 'customerType', header: 'Customer Type' },
      { field: 'customerName', header: 'Customer Name' },
      { field: 'customerState', header: 'Customer State' },
      { field: 'customerCreditLimit', header: 'Customer Credit Limit' },
      { field: 'customerManager', header: 'Customer Manager' },
      { field: 'customerCreationDate', header: 'Customer Creation Date' },
      { field: 'customerLastUpdateDate', header: 'Customer Last Update Date' }
    ];
  }

  loadCustomersLazy(event: LazyLoadEvent) {
    setTimeout(() => {
      if (this.datasource) {
        this.customers = this.datasource.slice(event.first, event.first + event.rows);
      }
    }, 300);
  }
}
