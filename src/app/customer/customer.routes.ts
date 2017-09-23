import { CustomerTableComponent } from './customer-table/customer-table.component';
import { CustomerComponent } from './customer.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';

export const customerRoutes = [
    {
        path: '',
        component: CustomerComponent,
        children: [
            {
                path: '',
                redirectTo: 'customertable/1',
                pathMatch: 'full'
            },
            {
                path: 'customertable/:page',
                component: CustomerTableComponent
            },
            {
                path: 'newcustomer',
                component: CustomerInfoComponent
            }
        ]
    }
];
