import { Component, OnInit } from '@angular/core';
// import { MenuModule, MenuItem } from 'primeng/primeng';

@Component({
  selector: 'workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  menuActive: boolean;
  activeMenuId: string;
  constructor() { }

  ngOnInit() {

  }

  onMenuButtonClick(event: Event) {
    this.menuActive = !this.menuActive;
  }

}
