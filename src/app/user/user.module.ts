import { UserComponent } from './user.component';
import { userRoutes } from './user.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserTableComponent } from './user-table/user-table.component';
@NgModule({
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        UserComponent,
        UserTableComponent
    ]
})
export class UserMoudle {

}
