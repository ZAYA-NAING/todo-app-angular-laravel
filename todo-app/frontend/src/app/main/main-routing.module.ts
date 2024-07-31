import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROOT_PATH, RoutesConstant } from '../core/constants/route.constant';
import { MainComponent } from './main.component';
import { PageNotFoundComponent } from '../core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: ROOT_PATH,
    component: MainComponent,
    children: [
      {
        path: RoutesConstant.TODOS.path,
        loadChildren: () =>
          import('./pages/todos/todos-page.module').then(
            m => m.TodosPageModule
          ),
        data: RoutesConstant.TODOS.data,
      },
      {
        path: '',
        redirectTo: RoutesConstant.TODOS.path,
        pathMatch: 'prefix',
      },
      {
        path: '**',
        component: PageNotFoundComponent,
        data: {},
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
