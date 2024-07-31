import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ROOT_PATH,
  RoutesConstant,
} from '../../../core/constants/route.constant';
import { TodosIndexComponent } from './todos-index/todos-index.component';

const routes: Routes = [
  {
    path: ROOT_PATH,
    component: TodosIndexComponent,
    data: RoutesConstant.TODOS.data,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosPageRoutingModule {}
