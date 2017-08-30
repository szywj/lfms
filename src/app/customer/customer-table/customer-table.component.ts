import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/primeng';
import { CustomerService } from './services/customer.service';
import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {
  datasource: Customer[];
  customers: Customer[];
  cols: any[];
  totalRecords: number;
  customer: Customer = new CustomerImpl();
  displayDialog: boolean;
  // selectedCustomer: Customer;

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

  onRowSelect(event) {
    // this.customer = this.cloneCustomer(event.data);
    this.customer = event.data;
    this.displayDialog = true;
  }

  edit(customer: Customer) {
    this.customer = customer;
    this.displayDialog = true;
  }

  // cloneCustomer(cus: Customer): Customer {
  //   let c = new CustomerImpl();
  //   for (let prop in cus) {
  //     c[prop] = cus[prop];
  //   }
  //   return c;
  // }
}

class CustomerImpl implements Customer {
  constructor(public customerNo?,
    public customerType?,
    public customerName?,
    public customerState?,
    public customerCreditLimit?,
    public customerManager?,
    public customerCreationDate?,
    public customerLastUpdateDate?) { }
}