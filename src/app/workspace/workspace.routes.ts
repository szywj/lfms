import { WorkspaceComponent } from './workspace.component';

export const workspaceRoutes = [
    {
        path: '',
        component: WorkspaceComponent,
        children: [
            {
                path: '',
                redirectTo: 'user',
                pathMatch: 'full'
            },
            {
                path: 'user',
                loadChildren: '../user/user.module#UserMoudle'
            }
        ]
    }
];
