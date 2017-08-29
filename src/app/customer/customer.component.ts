import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customerTypes: SelectItem[];
  selectedCustomerType: any;

  customerStates: SelectItem[];
  selectedCustomerState: any;

  dateTypes: SelectItem[];
  selectedDateType: any;

  startDate: Date;
  endDate: Date;

  constructor() {
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
  }

}
