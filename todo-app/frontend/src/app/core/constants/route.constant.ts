import { Route } from '@angular/router';

export const ROOT_PATH = '';

export interface RouteInterface extends Route {
  path: string;
  data?: {
    title?: string;
    icon?: any;
    isIndexPage?: boolean;
    unavailableRoles?: string[];
  };
  children?: RouteInterface[];
}

export interface RoutePaths {
  MAIN: RouteInterface;
  TODOS: RouteInterface;
}

export const RoutesConstant: RoutePaths = {
  MAIN: {
    path: '',
  },

  TODOS: {
    path: 'todos',
    data: {
      title: 'Todo',
      icon: 'file',
      isIndexPage: true,
    },
  },
};
