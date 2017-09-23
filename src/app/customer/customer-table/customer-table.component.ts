import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MenuItem, SelectItem } from 'primeng/primeng';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../interfaces/customer';
import { Router, ActivatedRoute } from '@angular/router';

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

  items: MenuItem[];

  customerTypes: SelectItem[];
  selectedCustomerType: any;

  customerStates: SelectItem[];
  selectedCustomerState: any;

  dateTypes: SelectItem[];
  selectedDateType: any;

  startDate: Date;
  endDate: Date;

  constructor(private customerService: CustomerService,
    public router: Router, public activatedRoute: ActivatedRoute) {
    this.customerTypes = [];
    this.customerTypes.push({ label: 'Institution', value: { id: 1, name: 'Institution' } });
    this.customerTypes.push({ label: 'Enterprise', value: { id: 2, name: 'Enterprise' } });

    this.customerStates = [];
    this.customerStates.push({ label: 'Draft', value: { id: 0, status: 'Draft' } });
    this.customerStates.push({ label: 'Credit not granted', value: { id: 1, status: 'Credit not granted' } });
    this.customerStates.push({ label: 'Credit granted', value: { id: 2, status: 'Credit granted' } });
    this.customerStates.push({ label: 'Deleted without a review', value: { id: 3, status: 'Deleted without a review' } });
    this.customerStates.push({ label: 'Deleted', value: { id: 4, status: 'Deleted' } });

    this.dateTypes = [];
    this.dateTypes.push({ label: 'Creation Date', value: { id: 0, status: 'Creation Date' } });

    // this.startDate = new Date();
    // this.endDate = new Date();
  }

  ngOnInit() {
    this.items = [];
    this.items.push({ label: 'Customer' });
    this.items.push({ label: 'Browse' });

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


  public newCustomer(): void {
    this.router.navigateByUrl('/workspace/customer/newcustomer');
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
