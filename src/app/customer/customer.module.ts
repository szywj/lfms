import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { DataTableModule, SharedModule, ButtonModule, DialogModule } from 'primeng/primeng';
import { InputTextModule, SelectButtonModule, DropdownModule, CalendarModule } from 'primeng/primeng';
import { BreadcrumbModule } from 'primeng/primeng';

import { CustomerComponent } from './customer.component';
import { customerRoutes } from './customer.routes';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { CustomerService } from '../services/customer.service';
import { CustomerInfoComponent } from './customer-info/customer-info.component';

@NgModule({
    imports: [
        CommonModule,
        BreadcrumbModule,
        FormsModule,
        ButtonModule,
        InputTextModule,
        SelectButtonModule,
        DropdownModule,
        CalendarModule,
        DataTableModule,
        SharedModule,
        HttpModule,
        DialogModule,
        RouterModule.forChild(customerRoutes)
    ],
    declarations: [
        CustomerComponent,
        CustomerTableComponent,
        CustomerInfoComponent
    ],
    providers: [
        CustomerService
    ]
})
export class CustomerModule {

}
