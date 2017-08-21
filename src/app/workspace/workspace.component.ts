import { Component, OnInit } from '@angular/core';
import { MenuModule, MenuItem } from 'primeng/primeng';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [{
      label: 'File',
      items: [
        {label: 'New', icon: 'fa-plus'},
        {label: 'Open...', icon: 'fa-download'}
      ]
    },
    {
      label: 'Edit',
      items: [
        {label: 'Undo', icon: 'fa-refresh'},
        {label: 'Redo', icon: 'fa-repeat'}
      ]
    }];
  }

}
