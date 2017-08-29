import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { DataTableModule, SharedModule, ButtonModule, DialogModule } from 'primeng/primeng';
import { InputTextModule, SelectButtonModule, DropdownModule, CalendarModule } from 'primeng/primeng';

import { CustomerComponent } from './customer.component';
import { customerRoutes } from './customer.routes';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { CustomerService } from './customer-table/services/customer.service';

@NgModule({
    imports: [
        CommonModule,
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
        CustomerTableComponent
    ],
    providers: [
        CustomerService
    ]
})
export class CustomerModule {

}
