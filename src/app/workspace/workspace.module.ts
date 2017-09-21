import { WorkspaceComponent } from './workspace.component';
import { workspaceRoutes } from './workspace.routes';
import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { MegaMenuModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    // MegaMenuModule,
    RouterModule.forChild(workspaceRoutes)
  ],
  declarations: [
    WorkspaceComponent
  ]
})
export class WorkspaceModule { }
