import { UserTableComponent } from './user-table/user-table.component';
import { UserComponent } from './user.component';
export const userRoutes = [
    {
        path: '',
        component: UserComponent,
        children: [
            {
                path: '',
                redirectTo: 'usertable/1',
                pathMatch: 'full'
            },
            {
                path: 'usertable/:page',
                component: UserTableComponent
            }
        ]
    }
];
