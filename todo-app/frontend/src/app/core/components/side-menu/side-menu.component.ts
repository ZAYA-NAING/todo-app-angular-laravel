import { Component, Input, OnInit } from '@angular/core';
import { SideMenuService } from '../../services/side-menu/side-menu.service';
import { RouteInterface } from '../../constants/route.constant';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.less'],
})
export class SideMenuComponent implements OnInit {
  @Input() isCollapsed: boolean = false;

  menuItems: RouteInterface[];

  constructor(private sideMenuService: SideMenuService) {
    this.menuItems = this.sideMenuService.menuItems;
  }

  ngOnInit(): void {}
}
