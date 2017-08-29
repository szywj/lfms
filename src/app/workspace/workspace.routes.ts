import { WorkspaceComponent } from './workspace.component';

export const workspaceRoutes = [
    {
        path: '',
        component: WorkspaceComponent,
        children: [
            {
                path: '',
                redirectTo: 'customer',
                pathMatch: 'full'
            },
            {
                path: 'customer',
                loadChildren: '../customer/customer.module#CustomerModule'
            }
        ]
    }
];
