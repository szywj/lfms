import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { DataTableModule, SharedModule, ButtonModule } from 'primeng/primeng';
import { InputTextModule, SelectButtonModule, DropdownModule, CalendarModule } from 'primeng/primeng';

import { UserComponent } from './user.component';
import { userRoutes } from './user.routes';
import { UserTableComponent } from './user-table/user-table.component';
import { CustomerService } from './user-table/services/customer.service';

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
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        UserComponent,
        UserTableComponent
    ],
    providers: [
        CustomerService
    ]
})
export class UserMoudle {

}
