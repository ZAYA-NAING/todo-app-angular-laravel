import { Injectable } from '@angular/core';
import { RouteInterface, RoutesConstant } from '../../constants/route.constant';

@Injectable({
  providedIn: 'root',
})
export class SideMenuService {
  menuItems: RouteInterface[];

  constructor() {
    const { TODOS } = RoutesConstant;
    this.menuItems = [TODOS];
  }
}
