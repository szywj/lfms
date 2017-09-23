import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/primeng';
import { CustomerService } from '../../services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {

  items: MenuItem[];
  customerTypes: SelectItem[];
  selectedCustomerType: any;

  customerStates: SelectItem[];
  selectedCustomerState: any;

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
  }

  ngOnInit() {
    this.items = [];
    this.items.push({ label: 'Customer' });
    this.items.push({ label: 'New' });
  }

}
