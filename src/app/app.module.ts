// import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { appRoutes } from './app-routing.module';
// import { MenuModule, MenuItem } from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
    // MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
